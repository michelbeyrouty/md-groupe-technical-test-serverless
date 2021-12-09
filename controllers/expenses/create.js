'use strict';

const { createExpense } = require('../../helpers/model/dynamoDB');
const {
  validateRequiredInputs, CONSTANTS,
} = require('../../helpers');
const { badRequest } = require('../../config/responses');

module.exports.handler = async (event, context, callback) => {

  try{

    const data = JSON.parse(event.body);
    console.log(JSON.stringify(data));

    validateRequiredInputs(data, CONSTANTS.createExpense);

    const result = await createExpense(data);

    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };

    callback(null, response);

  }catch(error){
    console.log(error);
    callback(null, badRequest(error.message));
  }
};
