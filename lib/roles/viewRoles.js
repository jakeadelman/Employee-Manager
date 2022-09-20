const connection = require("../connection.js");
const cTable = require("console.table");

const viewRoles = () => {
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
          const table = cTable.getTable(results);
          console.log(table);
          resolve(table);
        }
      );
    });
  });
};

module.exports = viewRoles;
