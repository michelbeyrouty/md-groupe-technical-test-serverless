const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const deleteExpense = async (data) => {

  const params = {
    TableName: 'expenses',
    Item: {
      ...data,
    },
  };

  await docClient.delete(params).promise();
};

module.exports = deleteExpense;
