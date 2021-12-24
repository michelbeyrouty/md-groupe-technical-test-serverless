const {
  InvalidInputType, MisingInput,
} = require('../../../config/errors');
const ExpenseSchema = require('./schema/expense');

module.exports = function expenseValidation(expense) {

  const { error = {} } = ExpenseSchema.validate(expense);
  const errorMessage = error.message;

  if(errorMessage.includes('must be')){
    throw new InvalidInputType(errorMessage);
  }

  if(errorMessage.includes('required')){
    throw new MisingInput(errorMessage);
  }

  return;
};

module.exports = {
  expenseValidation,
};
