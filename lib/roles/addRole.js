const connection = require("../connection.js");

const addRole = (name, salary, department) => {
  connection().then((connection) => {
    connection.connect((err) => {
      if (err) throw err;
    });

    connection.query("use employeeDB;");

    connection.query(
      `INSERT INTO Roles (title, salary, department) VALUES ('${name}','${salary}','${department}');`,
      function (error, results, fields) {
        if (error) throw error;
        // console.log(results);
      }
    );
  });
};

module.exports = addRole;
