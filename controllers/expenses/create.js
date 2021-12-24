'use strict';

const { createExpense } = require('../../helpers/model/dynamoDB');
const { validateExpense } = require('../../helpers');
const {
  badRequest, ServerError,
} = require('../../config/responses');

module.exports.handler = async (event, context, callback) => {

  try{
    const data = JSON.parse(event.body);
    console.log('sakjgbfwiunvs');

    validateExpense(data);

    const expense = await createExpense(data);

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        expense,
      }),
    };

    callback(null, response);

  }catch(error){
    switch(error.name) {
    case 'MisingInput':
    // case 'InvalidInputType':
      callback(null, badRequest(error.message));
      break;
    default:
      callback(null, ServerError(error.message));
    }
  }
};
