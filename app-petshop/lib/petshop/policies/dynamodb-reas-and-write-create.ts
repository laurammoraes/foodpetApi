import {Effect, PolicyStatement} from '@aws-cdk/aws-iam'

export const makeDynamodbReadandWrite = () =>{
    const policy = new PolicyStatement({effect: Effect.ALLOW})
    const actions = [
        'dynamodb:BatchGetItem',
        'dynamodb:GetRecords',
        'dynamodb:GetShardIterator',
        'dynamodb:Query',
        'dynamodb:GetItem',
        'dynamodb:Scan',
        'dynamodb:ConditionCheckItem',
        'dynamodb:BatchWriteItem',
        'dynamodb:PutItem',
        'dynamodb:UpdateItem',
        'dynamodb:DeleteItem'
        
    ]
    policy.addResources('arn:aws:dynamodb:us-east-2:275444055767:table/PetshopTable')
    policy.addActions(...actions)
    return policy
}