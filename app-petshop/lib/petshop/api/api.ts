import { Stack } from "@aws-cdk/core";
import {Cors, RestApi} from '@aws-cdk/aws-apigateway'


import { petshopRoute } from '../route/routePetshop'
// import { makeUserAuthorizer} from '../api/api-authorizer'

import { UserPool } from "@aws-cdk/aws-cognito";

export function petshopApi(stack: Stack, userPool: UserPool){
    const api = new RestApi(stack, 'petshopApi',{
        restApiName: 'petshopApi',
        defaultCorsPreflightOptions: {
            allowHeaders: [
                "Content-Type",
                "X-Amz-Date",
                "Authorization",
                "X-Api-Key",
            ],
            allowMethods: [ '*'],
            allowCredentials: true,
            allowOrigins: ["*"]
        }
    })
    
    petshopRoute(api, stack)
    return api

}