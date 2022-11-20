import { App, Stack} from '@aws-cdk/core'
import {petshopApi} from '../petshop/api/api'
import { makeCognitoUserPool } from "../petshop/cognito/userpool/makeCognitoUserPool"

import { makeDynamodbTables } from "../petshop/dynamodb/dynamodb-tables"



export class petshopCreateApi extends Stack {
    constructor(app: App, stackName:string){
        super(app, stackName)

        makeDynamodbTables(this)
        const userPool = makeCognitoUserPool(this)
        petshopApi(this, userPool)
       
    }
}