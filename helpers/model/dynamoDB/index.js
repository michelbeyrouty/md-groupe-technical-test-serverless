const { dynamoDB } = require("../init");
const DB = dynamoDB.getInstance();
const { createExpense } = require("./expenses/create");


module.exports = {
    "createExpense" : createExpense(DB)
}
