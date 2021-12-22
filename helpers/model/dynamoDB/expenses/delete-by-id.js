const { DynamoDB } = require('../DynamoDB');
const DB2 = DynamoDB.getInstance();

const deleteExpense = async (data) => {

  const params = {
    TableName,
    Item: {
      ...data,
    },
  };

  await DB2.delete(params).promise();

};

module.exports = deleteExpense;
