import { APIGatewayProxyEvent, APIGatewayProxyResult, } from "aws-lambda";
import { ok, serverError } from "../../../helpers/http";
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient({region: "us-east-2"});



//   export const handler = async() => {
// export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
exports.handler = async function(event: APIGatewayProxyEvent) {
   console.log(event);

   const body = JSON.parse(event.body);
   console.log(body);
   const number = body.number;
   const token = body.token;
   console.log(number);
  


   
    try{
        const data = {
            response: "Mensagem enviada com sucesso"
            }
        return ok(data)
    }catch(error){
        return serverError(error)
    }
   
    

  } 
