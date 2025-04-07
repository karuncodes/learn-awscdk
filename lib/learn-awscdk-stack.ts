import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// Constructs are Lego pieces which can have different further pieces.
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'node:path';



// This class defines the whole lego art where the app came from.

// App -> stacks -> Individual components.
// Stacks = Collection of individual infrastructure, can have multiple compoents (for e.g. lambda, api gateway, etc)
// Stacks then BIND with our APP construct.


export class LearnAwscdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'LearnAwscdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const welcomeUsername = new lambda.Function(this, 'welcomeLearnCDK', {
      runtime: lambda.Runtime.NODEJS_20_X,
      code: lambda.Code.fromAsset(path.join(__dirname, 'lambda')),
      handler: 'index.handler'
    })

  }

}
