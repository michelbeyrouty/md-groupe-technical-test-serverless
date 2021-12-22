const uuid = require('uuid');
const { DynamoDB } = require('../DynamoDB');
const DB2 = DynamoDB.getInstance();

const createExpense = (DB, TableName) => async (data) => {

  const timestamp = new Date().getTime();

  console.log(data);

  const params = {
    TableName,
    Item: {
      id: uuid.v1(),
      createdAt: timestamp,
      updatedAt: timestamp,
      ...data,
    },
  };

  const result = await DB2.put(params);

  return result;
};

module.exports = {
  createExpense,
};
