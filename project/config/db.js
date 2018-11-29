import mysql from "mysql";
import { builtinModules } from "module";
var pool = mysql.createPool({
  host: "",
  user: "",
  password: "",
  database: ""
});
function query(sql, callback) {
  pool.getConnection((err, connection) => {
    connection.query(sql, (err, rows) => {
      callback(err, rows);
      connection.release();
    });
  });
}
module.exports = query;
