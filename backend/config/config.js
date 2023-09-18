const Sequelize = require("sequelize");

const db = new Sequelize('mosq_8_db' , 'root' , '' , {
    host:'localhost',
    dialect:'mysql',
});

module.exports = db;
