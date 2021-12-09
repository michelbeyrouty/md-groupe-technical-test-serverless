'use strict'

const AWS = require("aws-sdk");
const uuid = require("uuid");
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const { validateRequiredInputs, CONSTANTS } = require("../../core");

module.exports.handler = (event, context, callback) => {

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

    dynamoDb.put(params,  (error, result) => {
        if (error) {
            console.error(error);
            callback(new Error("Couldn\'t create expense."))
            return;
        }

        console.log(JSON.stringify(result))

        const response = {
            statusCode: 200,
            body: JSON.stringify(result.Item)
        }

        callback(null, response)

    })

}
