import { IResource, LambdaIntegration, MockIntegration, PassthroughBehavior, RestApi, DomainName, BasePathMapping, SecurityPolicy, EndpointType } from 'aws-cdk-lib/aws-apigateway';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { App, Stack, RemovalPolicy, Fn } from 'aws-cdk-lib';
import { AttributeType, Table } from 'aws-cdk-lib/aws-dynamodb';
import { NodejsFunction, NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager'
import { join } from 'path'
import { Construct } from 'constructs';


export interface ApiGatewayLambdaDynamoProps {
    domainName: string;
    certificate: Certificate;
}
  
  /**
   * Creates an API Gateway/Lambda/DynamoDB Construct
   *
   */
  export class ApiGatewayLambdaDynamo extends Construct {
    constructor(parent: Stack, name: string, props: ApiGatewayLambdaDynamoProps) {
        super(parent, name);

        const analytics = new Table(this, 'analytics', {
            partitionKey: {
              name: 'analytics_id',
              type: AttributeType.STRING
            },
            tableName: 'analytics',
            removalPolicy: RemovalPolicy.DESTROY, // Removes Table when stack is deleted
        });

        // Create a Lambda function to retreive analytics data from database
        const getAnalyticsData = new NodejsFunction(this, 'getAnalyticsData', {
            entry: join(__dirname, '../lambdas', 'getAnalyticsData.ts'),
            handler: "lambdaHandler",
            runtime: Runtime.NODEJS_18_X
        });

        // Grant the Lambda function read access to the DynamoDB table
        analytics.grantReadData(getAnalyticsData);

        // Integrate the Lambda functions with the API Gateway resource
        const getAnalyticsDataIntegration = new LambdaIntegration(getAnalyticsData);

        // Create an API Gateway resource for each of the CRUD operations
        const api = new RestApi(this, 'analyticsApi', {
            restApiName: 'Analytics Data Service',
            deploy: true,
            deployOptions: {
                stageName: 'prod',
                tracingEnabled: true,
            }
        });
        
        
        api.addDomainName( "domain_name", {
            domainName: props.domainName,
            securityPolicy: SecurityPolicy.TLS_1_2,        
            certificate: props.certificate
        });

        const domain = new DomainName( this, "api_domain_name", {
            domainName: `api.${props.domainName}`,
            securityPolicy: SecurityPolicy.TLS_1_2,
            certificate: props.certificate,
            endpointType: EndpointType.REGIONAL
        });

        domain.addBasePathMapping( api );

        const analytics_endpoint = api.root.addResource('analytics');
        analytics_endpoint.addMethod('GET', getAnalyticsDataIntegration);
        addCorsOptions(analytics_endpoint);
        
    }
  }

  export function addCorsOptions(apiResource: IResource) {
    apiResource.addMethod('OPTIONS', new MockIntegration({
      // In case you want to use binary media types, uncomment the following line
      // contentHandling: ContentHandling.CONVERT_TO_TEXT,
      integrationResponses: [{
        statusCode: '200',
        responseParameters: {
          'method.response.header.Access-Control-Allow-Headers': "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent'",
          'method.response.header.Access-Control-Allow-Origin': "'*'",
          'method.response.header.Access-Control-Allow-Credentials': "'false'",
          'method.response.header.Access-Control-Allow-Methods': "'OPTIONS,GET,PUT,POST,DELETE'",
        },
      }],
      // In case you want to use binary media types, comment out the following line
      passthroughBehavior: PassthroughBehavior.NEVER,
      requestTemplates: {
        "application/json": "{\"statusCode\": 200}"
      },
    }), {
      methodResponses: [{
        statusCode: '200',
        responseParameters: {
          'method.response.header.Access-Control-Allow-Headers': true,
          'method.response.header.Access-Control-Allow-Methods': true,
          'method.response.header.Access-Control-Allow-Credentials': true,
          'method.response.header.Access-Control-Allow-Origin': true,
        },
      }]
    })
  }