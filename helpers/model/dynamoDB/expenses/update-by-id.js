const uuid = require('uuid');
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const updateExpense = async (data) => {

  // TODO: Add UpdateExpression

  const params = {
    TableName: 'expenses',
    Key: {
      'id': data.id,
    },
  };

  // const result = await docClient.update(params).promise();

  return {};
};

module.exports = updateExpense;

// const params2 = {
//   TableName: 'Table',
//   Key: { HashKey : 'hashkey' },
//   UpdateExpression: 'set #a = :x + :y',
//   ConditionExpression: '#a < :MAX',
//   ExpressionAttributeNames: {'#a' : 'Sum'},
//   ExpressionAttributeValues: {
//     ':x' : 20,
//     ':y' : 45,
//     ':MAX' : 100,
//   }
// }
