import {Stack } from '@aws-cdk/core'
import {makeDynamodbPetshopTable } from './tables/petshop-table'





export function makeDynamodbTables (stack: Stack ){
    const petshopTable = makeDynamodbPetshopTable(stack)
    
    

    return{
        petshopTable
    }
}