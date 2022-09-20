const connection = require("../connection.js");

const getRoles = () => {
  return new Promise((resolve) => {
    connection().then((connection) => {
      connection.connect((err) => {
        if (err) throw err;
      });

      connection.query("use employeeDB;");

      connection.query(
        `SELECT * FROM roles`,
        function (error, results, fields) {
          if (error) throw error;
          let arr = [];
          results.forEach((res) => {
            arr.push(res.title);
          });
          resolve(arr);
        }
      );
    });
  });
};

module.exports = getRoles;
