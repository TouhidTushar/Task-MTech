const mysql = require("mysql2");

const productionDB = true;

if (productionDB) {
  module.exports = mysql.createPool({
    host: "b0voafdqk3ocxz0h335g-mysql.services.clever-cloud.com",
    user: "unabrnbfcivipqru",
    password: "RzBwToJK4IC7W06l4ibl",
    database: "b0voafdqk3ocxz0h335g",
  });
} else {
  module.exports = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "admin1234",
    database: "mtechtask",
  });
}
