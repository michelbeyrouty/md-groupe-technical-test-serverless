const Joi = require('joi');
const EXPENSE_TYPES = [
  'Entertainment',
  'Food',
  'Bills',
  'Transport',
  'Other',
];

const expense = {
  'description': 'd',
  'type': 'x',
  'value': 5,
};

const error = expenseValidation(expense); // "type" must be a string, "type" is required

console.log(error.message);


function expenseValidation(expense) {
  const ExpenseSchema = Joi.object({
    description: Joi.string(),
    type: Joi.string().valid(...EXPENSE_TYPES)
      .required(),
    value: Joi.number().required(),
  });

  const { error } = ExpenseSchema.validate(expense);

  return error || {};
};
