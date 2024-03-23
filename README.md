# Building and deploying 3-tier web applications with CDK 

This is a companion repository for the course taught at the Atlanta Cloud Conference 2024

It is a baseline CDK project with a couple of important additions to aide in teaching the course
* The `bin` folder holds the app class for the CDK Project
* The  `lib` folder holds the stack class for the CDK project
* the `constructs` folder holds two construct classes
   * `api-gateway-lambda-dynamo.ts` is the constructs class that holds the API Gateway, Lambda, and DynamoDB Constructs
   * `static-site.ts` is the constructs class that holds the Route 53 Hosted Zone, the CloudFront distribution, and the S3 bucket for the static website
* The `web` folder holds the aws-cute-dancing-kittens website (I know thats the real reason you came here, congratulations!)
* The `lambdas` folder holds the lambda api function
* The `data` folder holds the data that is imported into DynamoDB for the web app
 
## CDK Default Stuff

The `cdk.json` file tells the CDK Toolkit how to execute your app.

### Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template
