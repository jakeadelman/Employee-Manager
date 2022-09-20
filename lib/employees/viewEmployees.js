const connection = require("../connection.js");
const cTable = require("console.table");

const viewEmployees = () => {
  return new Promise((resolve) => {
    connection().then((connection) => {
      connection.connect((err) => {
        if (err) throw err;
      });

      connection.query("use employeeDB;");

      connection.query(
        `SELECT e.id, e.first_name, e.last_name,e.title,r.department, r.salary, e.manager FROM employees e INNER JOIN roles r ON r.title = e.title;`,
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

module.exports = viewEmployees;
