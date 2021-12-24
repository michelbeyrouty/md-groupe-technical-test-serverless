const uuid = require('uuid');
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const createExpense = async () => {

  // TODO: Add date/time filtering

  const params = {
    TableName: 'expenses',
  };

  const response = await docClient.scan(params).promise();
  console.log(response);

  return response;
};

module.exports = createExpense;
