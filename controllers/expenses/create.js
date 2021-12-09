'use strict';

const { createExpense } = require('../../helpers/model/dynamoDB');
const {
  validateRequiredInputs, CONSTANTS,
} = require('../../helpers');
const {
  badRequest, NotFound, 
} = require('../../config/responses');

module.exports.handler = async (event, context, callback) => {

  try{

    const data = JSON.parse(event.body);
    console.log(JSON.stringify(data));

    validateRequiredInputs(data, CONSTANTS.createExpense);

    const result = await createExpense(data);
    console.log(result);

    const response = {
      statusCode: 200,
      body: 'JSON.stringify(result)',
    };

    callback(null, response);

  }catch(error){
    console.log(error);
    if(error.message == 'InvalidInputType'){
      callback(null, badRequest(error.message));
    }else{
      callback(null, NotFound(error.message));
    }
  }
};
