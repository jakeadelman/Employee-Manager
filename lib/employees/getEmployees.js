const connection = require("../connection.js");

const getEmployees = () => {
  return new Promise((resolve) => {
    connection().then((connection) => {
      connection.connect((err) => {
        if (err) throw err;
      });

      connection.query("use employeeDB;");

      connection.query(
        `SELECT * FROM employees`,
        function (error, results, fields) {
          if (error) throw error;
          // console.log(results);
          let arr = [];
          results.forEach((res) => {
            arr.push(res.first_name + " " + res.last_name);
          });
          console.log(arr.toString());

          resolve(arr);
        }
      );
    });
  });
};

module.exports = getEmployees;
