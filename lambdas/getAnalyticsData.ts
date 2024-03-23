import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
import { Logger } from '@aws-lambda-powertools/logger';
const logger = new Logger();
import httpStatus from 'http-status';

export const lambdaHandler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
    let response: APIGatewayProxyResult;
    let message: string;
    let analytics_id : string | undefined = "";
    if(event.queryStringParameters)
        analytics_id = event.queryStringParameters['query'];

    // Log the incoming event
    logger.info('Lambda invocation event', { event });
    try {
        
        const documentClient = new DynamoDB.DocumentClient(); //reference to DynamoDB client
        const dbParams: DynamoDB.DocumentClient.GetItemInput = {
            TableName: 'analytics',
            Key: {
                analytics_id: analytics_id,
            },
        };
        const result = await documentClient.get(dbParams).promise();
        message = JSON.stringify(result.Item);
        response = generateResponse(httpStatus.OK, message);
        logger.info(`successful response`, response.body);
        return response;
    } catch (err) {
        // Error handling
        response = generateResponse(httpStatus.INTERNAL_SERVER_ERROR, httpStatus['500_MESSAGE']);
        logger.error(`Error response from API enpoint: ${err}`, response.body);
        return response;
    }
};

function generateResponse(statusCode: number, body: string): APIGatewayProxyResult {
    const response: APIGatewayProxyResult = {
        body: body,
        statusCode: statusCode,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
        },
    };
    return response;
}