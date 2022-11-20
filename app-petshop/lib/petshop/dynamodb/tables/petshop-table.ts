import * as dynamodb from '@aws-cdk/aws-dynamodb'
import { Stack, RemovalPolicy } from '@aws-cdk/core'

export function makeDynamodbPetshopTable (stack: Stack){
    const PetshopTable = new dynamodb.Table(stack, 'PetshopTable', {
        partitionKey: {
            name: 'id', 
            type: dynamodb.AttributeType.STRING 
        },
        billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
        replicationRegions: ['us-east-2'],
        tableName: 'PetshopTable'
    })
    return PetshopTable
}