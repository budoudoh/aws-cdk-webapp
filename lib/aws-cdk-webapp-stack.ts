import * as cdk from 'aws-cdk-lib';
import { StaticSite } from '../constructs/static-site';
import { Construct } from 'constructs';
import { ApiGatewayLambdaDynamo } from '../constructs/api-gateway-lambda-dynamo';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';

const DOMAIN = "aws-cute-dancing-kittens.com"
export class AwsCdkWebappStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new cdk.CfnOutput(this, "Domain", { value: DOMAIN })

    // The code that defines your stack goes here
    const site = new StaticSite(this, 'StaticSite', {
      domainName: DOMAIN,
      siteSubDomain: '',
    });
    
    const api = new ApiGatewayLambdaDynamo(this, 'ApiGatewayLambdaDynamo', {
      domainName: DOMAIN,
      certificate: site.certificate
    });
  }
}
