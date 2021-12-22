const uuid = require('uuid');
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const createExpense = async (data) => {

  const timestamp = new Date().getTime();
  const Expense = {
    'id': uuid.v1(),
    'createdAt': timestamp,
    'updatedAt': timestamp,
    ...data,
  };

  const params = {
    TableName: 'expenses',
    Item: Expense,
  };

  await docClient.put(params).promise();

  return Expense;
};

module.exports = createExpense;
