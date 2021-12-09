const { DynamoDB } = require("./DynamoDB");
const DB = DynamoDB.getInstance();
const ExpensesTableName = "expenses";
const { createExpense } = require("./expenses/create");

module.exports = {
    "createExpense" : createExpense(DB,ExpensesTableName),
}
