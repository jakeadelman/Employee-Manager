const mysql = require("mysql");
const createConn = () => {
  return new Promise(async (resolve) => {
    resolve(
      (conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        insecureAuth: "true",
      }))
    );
  });
};

module.exports = createConn;
