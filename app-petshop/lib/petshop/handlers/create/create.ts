import { APIGatewayProxyEvent, APIGatewayProxyResult, } from "aws-lambda";
import { ok, serverError } from "../../../helpers/http";
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient({region: "us-east-2"});



//   export const handler = async() => {
// export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
exports.handler = async function(event: APIGatewayProxyEvent) {
   console.log(event);

   const email = event.request.userAttributes.email;
   const email_verified = event.request.userAttributes.email_verified;
   console.log(email);
   console.log(email_verified);
   console.log(event)
   
  
   
    var params = {
        TableName: 'PetshopTable', 
        Item:{
            id: email,
            verify: email_verified,
            createdDate: Date.now(),
            telphone: null,
            end:null,
            instagram:null,
            site:null,
            veterinario:null,
            servico:null,
           
        }
    }
    try{ 
        const create = await docClient.put(params).promise();
        const data = {
           response: "PetShop criado com sucesso!"
           }
        
        return ok(data)
    }catch(error){
        console.error(error)
        return serverError(error)
    }



   
    
   
    

  } 


  