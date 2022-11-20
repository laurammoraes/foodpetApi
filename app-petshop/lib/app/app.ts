import { App, Stack} from '@aws-cdk/core'
import {petshopApi} from '../petshop/api/api'
import { makeCognitoUserPool } from "../petshop/cognito/userpool/makeCognitoUserPool"




export class petshopCreateApi extends Stack {
    constructor(app: App, stackName:string){
        super(app, stackName)

        
       const userPool = makeCognitoUserPool(this)
        petshopApi(this, userPool)
       
    }
}