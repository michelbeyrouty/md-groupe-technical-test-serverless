'use strict'

const AWS = require("aws-sdk");
const uuid = require("uuid");
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const { validateRequiredInputs, CONSTANTS } = require("../../core");

module.exports.handler = async (event, context, callback) => {

    try{

    const timestamp = new Date().getTime();
    const data = JSON.parse(event.body);
    console.log(JSON.stringify(data))

    validateRequiredInputs(data, CONSTANTS.createExpense);

    const params = {
        TableName: "expenses",
        Item: {
            id: uuid.v1(),
            createdAt: timestamp,
            updatedAt: timestamp,
            ...data
        }
    }

    const result = dynamoDb.put(params);

    const response = {
        statusCode: 200,
        body: JSON.stringify(result.Item)
    }

    callback(null, response)

    }catch(error){
        console.log(error)

    }
}
