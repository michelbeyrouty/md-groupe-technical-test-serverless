const uuid = require("uuid");

const createExpense = (DB) => (data) => {

    const timestamp = new Date().getTime();

    const params = {
        TableName: "expenses",
        Item: {
            id: uuid.v1(),
            createdAt: timestamp,
            updatedAt: timestamp,
            ...data
        }
    }

    const result = DB.put(params);

    return result

}

module.exports = {
    createExpense
}