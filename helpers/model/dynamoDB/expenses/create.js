const uuid = require('uuid');

const createExpense = (DB, TableName) => async (data) => {

  const timestamp = new Date().getTime();

  const params = {
    TableName,
    Item: {
      id: uuid.v1(),
      createdAt: timestamp,
      updatedAt: timestamp,
      ...data,
    },
  };

  const result = await DB.put(params);

  return result;
};

module.exports = {
  createExpense,
};
