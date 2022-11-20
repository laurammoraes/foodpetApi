import { UserPool, AccountRecovery, StringAttribute, VerificationEmailStyle, OAuthScope } from '@aws-cdk/aws-cognito';
import { Stack } from '@aws-cdk/core';
import { ProviderAttribute, UserPoolIdentityProviderFacebook } from '@aws-cdk/aws-cognito';
// import {makecreatePetshopLambda} from '../../lambdas/create'
import { UserPoolOperation } from 'aws-cdk-lib/aws-cognito';

export function makeCognitoUserPool(stack: Stack) {
    const userPool = new UserPool(stack, "UserPool", {
        selfSignUpEnabled: true,
        autoVerify: { email: true },
        signInAliases: { email: true },
        userVerification: {
            emailSubject: 'Verify your email for our awesome app!',
            emailBody: 'Thanks for signing up to our awesome app! Your verification code is {####}',
            emailStyle: VerificationEmailStyle.CODE,
        },
        userInvitation: {
            emailSubject: 'Invite to join our awesome app!',
            emailBody: 'Hello {username}, you have been invited to join our awesome app! Your temporary password is {####}',
        },

        customAttributes: {
            'cellphone': new StringAttribute({ minLen: 11, maxLen: 15, mutable: true }),
            'city': new StringAttribute({ minLen: 3, maxLen: 30, mutable: true }),
            'dateBirth': new StringAttribute({ minLen: 10, maxLen: 10, mutable: true }),
            'name': new StringAttribute({ minLen: 3, maxLen: 50, mutable: true }),
            'uf': new StringAttribute({ minLen: 2, maxLen: 2, mutable: true }),
        },

        passwordPolicy: {
            minLength: 6,
            requireLowercase: true,
            requireUppercase: true,
            requireDigits: true,
            requireSymbols: true,
        },
        accountRecovery: AccountRecovery.EMAIL_ONLY,


        userPoolName: "UserPool",
    });
    // userPool.addTrigger(UserPoolOperation.POST_CONFIRMATION, makecreatePetshopLambda(stack));
    userPool.addClient('app-client', {
        oAuth: {
            flows: {
                authorizationCodeGrant: true,
            },
            scopes: [OAuthScope.OPENID],
            callbackUrls: ['https://my-app-domain.com/welcome'],
            logoutUrls: ['https://my-app-domain.com/signin'],
        }
    });

    new UserPoolIdentityProviderFacebook(stack, 'Facebook', {
        clientId: '980953762652307',
        clientSecret: '9d1dfc27408d22aff70ff750d0958400',
        userPool: userPool,
        attributeMapping: {
            email: ProviderAttribute.FACEBOOK_EMAIL,
            fullname: ProviderAttribute.FACEBOOK_NAME,
            locale: ProviderAttribute.FACEBOOK_LOCALE,
        }
    });




    userPool.addDomain('Domain', {
        cognitoDomain: {
            domainPrefix: 'petshopapp',
        },
    });


    return userPool;
}