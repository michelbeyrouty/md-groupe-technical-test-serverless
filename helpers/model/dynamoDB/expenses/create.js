const uuid = require('uuid');
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const createExpense = async (data) => {

  const timestamp = new Date().getTime();

  const params = {
    TableName: 'expenses',
    Item: {
      'id': uuid.v1(),
      'createdAt': timestamp,
      'updatedAt': timestamp,
      ...data,
    },
  };

  const result = await docClient.put(params).promise();

  console.log(result);
  return result;
};

module.exports = createExpense;
