import { UserPool, AccountRecovery, StringAttribute, VerificationEmailStyle,  ProviderAttribute, UserPoolIdentityProviderFacebook } from '@aws-cdk/aws-cognito'
import {Stack} from '@aws-cdk/core'
import { makeCognitoUserPool} from '../userpool/makeCognitoUserPool'

import { makecreatePetshopLambda } from '../../lambdas/create'

export const makeCognitoUserPoolClient = (stack: Stack) => {
    const provider = new UserPoolIdentityProviderFacebook(stack, 'Facebook', {
        clientId: '512085850838763',
        clientSecret: '65d06a91827c4c82419fab67df097e17',
        userPool: makeCognitoUserPool,
        attributeMapping: {
          id: ProviderAttribute.FACEBOOK_USERNAME,
          email: ProviderAttribute.FACEBOOK_EMAIL,
       
          
        }
      });
      return provider
  }