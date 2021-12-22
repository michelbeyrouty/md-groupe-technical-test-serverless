
const AWS = require('aws-sdk');

const DynamoDB = (function () {
  var instance;

  function createInstance() {
    const docClient = new AWS.DynamoDB.DocumentClient();
    return docClient;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

module.exports = {
  DynamoDB,
};
