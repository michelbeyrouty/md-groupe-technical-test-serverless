const uuid = require('uuid');
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const getExpenseById = async (expenseId) => {

  const params = {
    TableName: 'expenses',
    Key: {
      'id': expenseId,
    },
  };

  const result = await docClient.get(params).promise();

  return result.Item;
};

module.exports = getExpenseById;
