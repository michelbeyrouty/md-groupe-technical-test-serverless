'use strict';

const { deleteExpenseById } = require('../../helpers/model/dynamoDB');
const { ServerError } = require('../../config/responses');

module.exports.handler = async (event, context, callback) => {

  try{

    const expenseId = event.pathParameters.id;

    await deleteExpenseById(expenseId);

    const response = {
      statusCode: 200,
    };

    callback(null, response);

  }catch(error){
    switch(error.name) {
    default:
      callback(null, ServerError(error.message));
    }

  }
};
