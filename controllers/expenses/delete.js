'use strict';

const { deleteExpenseById } = require('../../helpers/model/dynamoDB');
const { ServerError } = require('../../config/responses');

module.exports.handler = async (event, context, callback) => {

  try{
    const data = JSON.parse(event.body);

    const Expense = await deleteExpenseById(data);

    const response = {
      statusCode: 200,
      body: {
        Expense,
      },
    };

    callback(null, response);

  }catch(error){
    switch(error.name) {
    default:
      callback(null, ServerError(error.message));
    }

  }
};
