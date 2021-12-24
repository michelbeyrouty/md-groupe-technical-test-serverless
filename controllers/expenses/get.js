'use strict';

const { getExpenseById } = require('../../helpers/model/dynamoDB');
const { ServerError } = require('../../config/responses');

module.exports.handler = async (event, context, callback) => {

  try{

    const expenseId = event.pathParameters.id;

    const expense = await getExpenseById(expenseId);

    const response = {
      statusCode: 200,
      body: JSON.stringify(expense),
    };

    callback(null, response);

  }catch(error){
    switch(error.name) {
    default:
      callback(null, ServerError(error.message));
    }

  }
};
