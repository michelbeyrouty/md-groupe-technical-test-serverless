const { DynamoDB } = require('./DynamoDB');
const DB = DynamoDB.getInstance();
const ExpensesTableName = 'expenses';

module.exports = {
  'createExpense' : require('./expenses/create')(DB, ExpensesTableName),
  // 'deleteExpenseById' : require('./expenses/delete-by-id')(DB, ExpensesTableName),
  // 'getExpenseById' : require('./expenses/get-by-id')(DB, ExpensesTableName),
  // 'listExpenses' : require('./expenses/list')(DB, ExpensesTableName),
  // 'updateExpenseById' : require('./expenses/update-by-id')(DB, ExpensesTableName),
};
