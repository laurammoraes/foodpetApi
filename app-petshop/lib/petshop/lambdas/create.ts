import {Stack} from '@aws-cdk/core'
import { TypeScriptFunction }  from 'cdk-typescript-tooling'
import { makeDynamodbReadandWrite} from '../../petshop/policies/dynamodb-reas-and-write-create'

export const makecreatePetshopLambda = (stack: Stack) => {
    return new TypeScriptFunction(stack, 'createPetshop', {
        entry: require.resolve('../handlers/create/create.ts'),
        functionName: 'FUNCTION-CREATE-PETSHOP', 
        initialPolicy:[ makeDynamodbReadandWrite()]
    })
}