'use strict';

const { updateExpenseById } = require('../../helpers/model/dynamoDB');
const { validateExpense } = require('../../helpers');
const {
  badRequest, ServerError,
} = require('../../config/responses');

module.exports.handler = async (event, context, callback) => {

  try{

    const data = JSON.parse(event.body);
    console.log('sakjgbfwiunvs');

    validateExpense(data);

    await updateExpenseById(data);

    const response = {
      statusCode: 200,
    };

    callback(null, response);

  }catch(error){
    switch(error.name) {
    case 'MisingInput':
    case 'InvalidInputType':
      callback(null, badRequest(error.message));
      break;
    default:
      callback(null, ServerError(error.message));
    }
  }
};
