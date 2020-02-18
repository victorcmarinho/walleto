class Response {
  Ok (body, message) {
    return {
      statusCode: 200,
      data: body,
      message
    }
  }

  Created (body, message) {
    return {
      statusCode: 201,
      data: body,
      message
    }
  }

  Error (error) {
    return {
      statusCode: error.statusCode || 500,
      body: {
        error: error.message
      }
    }
  }
}

export default new Response()
