
const headers = {
  'Content-Type': 'text/plain',
};

function badRequest(message) {

  return {
    statusCode: 400,
    body: JSON.stringify({
      message,
    }),
    headers,
  };
}

function ServerError(message) {

  return {
    statusCode: 500,
    body: JSON.stringify({
      message,
    }),
    headers,
  };
}


module.exports = {
  badRequest,
  ServerError,
};
