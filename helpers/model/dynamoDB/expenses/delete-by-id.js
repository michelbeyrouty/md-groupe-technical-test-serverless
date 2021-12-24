const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const deleteExpenseById = async (expenseId) => {

  const params = {
    TableName: 'expenses',
    Key: {
      'id': expenseId,
    },
  };

  await docClient.delete(params).promise();
};

module.exports = deleteExpenseById;
