const { DynamoDB } = require('../DynamoDB');
const DB2 = DynamoDB.getInstance();

const createExpense = (DB, TableName) => async (data) => {

  console.log(data);

  const params = {
    TableName,
    Item: {
      ...data,
    },
  };

  const result = await DB2.scan(params);

  return result;
};

module.exports = {
  createExpense,
};
