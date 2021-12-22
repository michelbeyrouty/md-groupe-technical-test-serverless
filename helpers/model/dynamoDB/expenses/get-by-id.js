const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const createExpense = (DB, TableName) => async (data) => {

  console.log(data);

  const params = {
    TableName,
    Item: {
      ...data,
    },
  };

  const result = await docClient.scan(params).promise();

  return result;
};

module.exports = {
  createExpense,
};
