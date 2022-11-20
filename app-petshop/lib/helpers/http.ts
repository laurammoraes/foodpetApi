export interface HttpResponse {
    statusCode: number,
    body: any,
    headers: any
  }
export const badRequest = (error: any): HttpResponse => ({
  statusCode: 400,
  body: JSON.stringify({
    error_code: 'BadRequest',
    error_message: error.message,
    error: error.name
  }),
  headers: {
    'Access-Control-Allow-Origin': "*"
  }
})
  export const serverError = (error: any): HttpResponse => {
    return ({
      statusCode: 500,
      body: JSON.stringify({
        error_code: 'InternalServerError',
        error_message: error.message,
        error: error.name
      }), 
      headers: {
        'Access-Control-Allow-Origin': "*"
      }
    })
  }
  export const unauthorized = (): HttpResponse => ({
    statusCode: 401,
    body: JSON.stringify({
      error_code: 'Unauthorized',
      error_message: 'The user is not authenticated',
      error: 'UnauthorizedError'
    }),
    headers: {
      'Access-Control-Allow-Origin': "*"
    }
  })
  export const ok = (resposta:any): HttpResponse => ({
   
    statusCode: 200,

   
    body: JSON.stringify(resposta),
    headers: {
      'Access-Control-Allow-Origin': "*"
    }
  })
  export const created = (data:any): HttpResponse => ({
    statusCode: 201,
    body: JSON.stringify(data),
    headers: {
      'Access-Control-Allow-Origin': "*"
    }
  })
  export const forbidden = (error:any): HttpResponse => ({
    statusCode: 403,
    body: JSON.stringify({
      error_code: 'Forbidden',
      error_message: error.message,
      error: error.name
    }),
    headers: {
      'Access-Control-Allow-Origin': "*"
    }
  })
  export const noContent = (): HttpResponse => ({
    statusCode: 204,
    body: null,
    headers: {
      'Access-Control-Allow-Origin': "*"
    }
  })
  export const notFound = (): HttpResponse => {
    return ({
      statusCode: 404,
      body: JSON.stringify({
        error_code: 'NotFound',
        error_message: 'Resource not found',
        error: 'NotFoundError'
      }),
      headers: {
        'Access-Control-Allow-Origin': "*"
      }
    })
  }
  export const accepted = (): HttpResponse => {
    return ({
      statusCode: 202,
      body: null,
      headers: {
        'Access-Control-Allow-Origin': "*"
      }
    })
  }