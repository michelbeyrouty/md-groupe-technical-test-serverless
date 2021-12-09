
const AWS = require("aws-sdk");

const DynamoDB = (function () {
    var instance;

    function createInstance() {
        const dynamoDb = new AWS.DynamoDB.DocumentClient();
        return dynamoDb;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

module.exports = {
    DynamoDB
}
