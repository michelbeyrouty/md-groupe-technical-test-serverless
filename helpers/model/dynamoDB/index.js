module.exports = {
  'createExpense' : require('./expenses/create'),
  'deleteExpenseById' : require('./expenses/delete-by-id'),
  // 'getExpenseById' : require('./expenses/get-by-id')(DB, ExpensesTableName),
  // 'listExpenses' : require('./expenses/list')(DB, ExpensesTableName),
  // 'updateExpenseById' : require('./expenses/update-by-id')(DB, ExpensesTableName),
};
