var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admine",
  database: "nettantra"
});
module.exports =con;
