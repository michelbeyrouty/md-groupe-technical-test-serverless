
const headers = {
  'Content-Type': 'text/plain',
};

function badRequest(body) {

  return {
    statusCode: 400,
    body,
    headers,
  };
}

function NotFound(body) {

  return {
    statusCode: 404,
    body,
    headers,
  };
}


module.exports = {
  badRequest,
  NotFound,
};
