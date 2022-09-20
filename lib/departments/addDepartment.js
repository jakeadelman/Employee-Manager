const connection = require("../connection.js");

const addDepartment = (department) => {
  connection().then((connection) => {
    connection.connect((err) => {
      if (err) throw err;
    });

    connection.query("use employeeDB;");

    connection.query(
      `INSERT INTO Departments (department_name) VALUES ('${department}');`,
      function (error, results, fields) {
        if (error) throw error;
        // console.log(results);
      }
    );
  });
};

module.exports = addDepartment;
