const sequelize = require("../bin/dbConnection");
const users = require("./definitions/users");
const models = {users};
const db = {};

db.sequelize = sequelize; // creating a key called sequelize and assigning it the value of the sequelize connection
sequelize.models = models;

module.exports = { models, db }; 