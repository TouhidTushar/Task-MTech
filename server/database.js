const mysql = require("mysql2");
require("dotenv").config();

//set the value of productionDB to false for using localDB
//set the value of productionDB to true for using cloudDB
const productionDB = false;

if (productionDB) {
  module.exports = mysql.createPool({
    host: process.env.HOST, //your hostname
    user: process.env.USER, //your username
    password: process.env.PASSWORD, //your password
    database: process.env.DATABASE, //your database
  });
} else {
  module.exports = mysql.createPool({
    host: "localhost",
    user: "root", //change this to your local username
    password: "admin1234", //change this to your local user password
    database: "mtechtasklocal", //no need to change this
  });
}
