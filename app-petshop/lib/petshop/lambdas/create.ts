import {Stack} from '@aws-cdk/core'
import { TypeScriptFunction }  from 'cdk-typescript-tooling'
// import { makeDynamodbReadandWriteCustomer} from '../../policies/dynamodb-read-and-write-CUSTOMER'

export const makecreatePetshopLambda = (stack: Stack) => {
    return new TypeScriptFunction(stack, 'createPetshop', {
        entry: require.resolve('../handlers/create/create.ts'),
        functionName: 'FUNCTION-CREATE-PETSHOP', 
        initialPolicy:[]
    })
}