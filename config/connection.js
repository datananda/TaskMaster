require("dotenv").config();
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: burgers_db,
});

module.exports = connection;