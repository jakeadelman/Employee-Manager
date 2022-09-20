const connection = require("../connection.js");

const getDepartments = () => {
  return new Promise((resolve) => {
    connection().then((connection) => {
      connection.connect((err) => {
        if (err) throw err;
      });

      connection.query("use employeeDB;");

      connection.query(
        `SELECT * FROM departments`,
        function (error, results, fields) {
          if (error) throw error;
          // console.log(results);
          let arr = [];
          results.forEach((res) => {
            arr.push(res.department_name);
          });
          // console.log(arr.toString());

          resolve(arr);
        }
      );
    });
  });
};

module.exports = getDepartments;
