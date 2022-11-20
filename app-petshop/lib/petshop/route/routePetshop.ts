import { RestApi, LambdaIntegration, Authorizer, AuthorizationType, Resource } from "@aws-cdk/aws-apigateway"
import { Stack} from '@aws-cdk/core'



import {makecreatePetshopLambda} from '../lambdas/create'




export const  petshopRoute = (api: RestApi, stack: Stack): void => {
    const Petshop = api.root.addResource('petshop')
    // Petshop.addCorsPreflight({
    //     allowHeaders: ['Content-Type,X-Amz-Date,Authorization,X-Api-Key'],
    //     allowOrigins: ['*'],
    //     allowMethods: ['*']
    // })

    create(stack, Petshop);
    

}

const create = (stack: Stack, functionResource: Resource) => {
    const makeCreatePetshop = makecreatePetshopLambda(stack)
    functionResource.addMethod('POST', new LambdaIntegration(makeCreatePetshop))
}