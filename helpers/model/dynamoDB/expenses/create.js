const uuid = require('uuid');
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const createExpense = async (data) => {

  const params = {
    TableName: 'expenses',
    Item: {
      'id': uuid.v1(),
      'createdAt': new Date().getTime(),
      'updatedAt': new Date().getTime(),
      ...data,
    },
  };

  await docClient.put(params).promise();

  return params.Item;
};

module.exports = createExpense;
