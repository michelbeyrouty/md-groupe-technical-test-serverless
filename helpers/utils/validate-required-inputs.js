const {
  InvalidInputType, MisingInput,
} = require('../../config/errors');

module.exports = function validateInputs (data, requiredInputsWithTypesList) {

  for(const field of requiredInputsWithTypesList) {
    const fieldName = field.split(':')[0];
    const fieldType = field.split(':')[1];

    if (data[fieldName] === null || data[fieldName] === undefined) {
      throw new MisingInput(`${field} param is required`);
    }

    const dataType = typeof data[fieldName];

    if(dataType !== fieldType){
      throw new InvalidInputType(`${fieldName} has the wrong type ` + dataType + ' should be ' + fieldType );
    }

  }
};

