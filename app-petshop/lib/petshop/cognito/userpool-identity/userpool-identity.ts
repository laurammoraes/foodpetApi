import { UserPool, AccountRecovery, StringAttribute, VerificationEmailStyle,  ProviderAttribute, UserPoolIdentityProviderFacebook } from '@aws-cdk/aws-cognito'
import {Stack} from '@aws-cdk/core'
import { makeCognitoUserPool} from '../userpool/makeCognitoUserPool'

import { makecreatePetshopLambda } from '../../lambdas/create'

export const makeCognitoUserPoolClient = (stack: Stack) => {
    const provider = new UserPoolIdentityProviderFacebook(stack, 'Facebook', {
        clientId: '980953762652307',
        clientSecret: '9d1dfc27408d22aff70ff750d0958400',
        userPool: makeCognitoUserPool,
        attributeMapping: {
          id: ProviderAttribute.FACEBOOK_USERNAME,
          email: ProviderAttribute.FACEBOOK_EMAIL,
          fullname: ProviderAttribute.FACEBOOK_EMAIL,
          locale: ProviderAttribute.FACEBOOK_LOCALE,
          
          
        }
      });
      return provider
  }