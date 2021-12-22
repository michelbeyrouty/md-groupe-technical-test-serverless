'use strict';

const { createExpense } = require('../../helpers/model/dynamoDB');
const {
  validateRequiredInputs, CONSTANTS,
} = require('../../helpers');
const {
  badRequest, NotFound, ServerError,
} = require('../../config/responses');

module.exports.handler = async (event, context, callback) => {

  try{
    const data = JSON.parse(event.body);

    validateRequiredInputs(data, CONSTANTS.createExpense);

    const expense = await createExpense(data);

    const response = {
      statusCode: 200,
      body: expense,
    };

    callback(null, response);

  }catch(error){
    switch(error.name) {
    case 'InvalidInputType':
      callback(null, NotFound(error.message));
      break;
    case 'MisingInput':
      callback(null, badRequest(error.message));
      break;
    default:
      callback(null, ServerError(error.message));
    }

  }
};
