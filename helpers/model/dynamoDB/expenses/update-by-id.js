const uuid = require('uuid');
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const updateExpense = async (data) => {

  const params = {
    TableName: 'expenses',
    Key: {
      'id': data.id,
    },
    Item: {
      'updatedAt': new Date().getTime(),
      ...data,
    },
  };

  const result = await docClient.update(params).promise();

  return result.Item;
};

module.exports = updateExpense;
