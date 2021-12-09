
const headers = {
  'Content-Type': 'text/plain',
};

function badRequest(message) {

  return {
    statusCode: 400,
    body:{
      message,
    },
    headers,
  };
}


module.exports = {
  badRequest,
};
