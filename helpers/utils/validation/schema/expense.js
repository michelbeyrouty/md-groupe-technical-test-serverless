const Joi = require('joi');
const EXPENSE_TYPES = [
  'Entertainment',
  'Food',
  'Bills',
  'Transport',
  'Other',
];

const ExpenseSchema = Joi.object({
  description: Joi.string(),
  type: Joi.string().in(...EXPENSE_TYPES)
    .required(),
  value: Joi.number().required(),
});

module.exports = ExpenseSchema;
