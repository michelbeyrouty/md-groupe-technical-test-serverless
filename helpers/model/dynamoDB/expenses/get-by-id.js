const uuid = require('uuid');
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const createExpense = async (expenseId) => {

  const params = {
    TableName: 'expenses',
    Item: {
      'id': expenseId,
    },
  };

  const result = await docClient.get(params).promise();

  return result.Item;
};

module.exports = createExpense;
