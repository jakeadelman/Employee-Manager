const connection = require("../connection.js");

const addEmployee = (name, role) => {
  connection().then((connection) => {
    connection.connect((err) => {
      if (err) throw err;
    });

    let firstName = name.split(" ");
    firstName = firstName[0];

    connection.query("use employeeDB;");

    connection.query(
      `UPDATE employees SET title = "${role}" WHERE first_name = "${firstName}";`,
      function (error, results, fields) {
        if (error) throw error;
        // console.log(results);
      }
    );
  });
};

module.exports = addEmployee;
