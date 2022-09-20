const connection = require("../connection.js");

const addEmployee = (firstName, lastName, role, manager) => {
  connection().then((connection) => {
    connection.connect((err) => {
      if (err) throw err;
    });

    connection.query("use employeeDB;");

    connection.query(
      `INSERT INTO Employees (first_name, last_name, title, manager) VALUES ('${firstName}','${lastName}','${role}','${manager}');`,
      function (error, results, fields) {
        if (error) throw error;
        // console.log(results);
      }
    );
  });
};

module.exports = addEmployee;
