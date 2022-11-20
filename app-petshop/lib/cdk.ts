import * as cdk from '@aws-cdk/core'
import {petshopCreateApi} from '../lib/app/app'


const app = new cdk.App()
const stacks = {
    petshopApi: new petshopCreateApi(app, 'petshopApp')
}

export default stacks