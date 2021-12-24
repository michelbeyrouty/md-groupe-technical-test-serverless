'use strict';

const { listExpenses } = require('../../helpers/model/dynamoDB');
const { ServerError } = require('../../config/responses');

module.exports.handler = async (event, context, callback) => {

  try{

    const expenseList = await listExpenses();

    const response = {
      statusCode: 200,
      body: JSON.stringify(expenseList),
    };

    callback(null, response);

  }catch(error){
    switch(error.name) {
    default:
      callback(null, ServerError(error.message));
    }

  }
};
