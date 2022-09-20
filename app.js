const inquirer = require("inquirer");
const addDepartment = require("./lib/departments/addDepartment.js");
const viewDepartments = require("./lib/departments/viewDepartments.js");
const addRole = require("./lib/roles/addRole.js");
const getDepartments = require("./lib/departments/getDepartments.js");
const viewRoles = require("./lib/roles/viewRoles.js");
const getRoles = require("./lib/roles/getRoles.js");
const addEmployee = require("./lib/employees/addEmployee.js");
const viewEmployees = require("./lib/employees/viewEmployees.js");
const getEmployees = require("./lib/employees/getEmployees.js");
const updateEmployee = require("./lib/employees/updateEmployee.js");

const questions = [
  {
    type: "list",
    name: "whatToDo",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "Add an Employee",
      "Update Employee Role",
      "View All Roles",
      "Add a Role",
      "View All Departments",
      "Add a Department",
      "Quit",
    ],
  },
];

// generate tables or ask further questions
const generate = () => {
  inquirer.prompt(questions).then(async (ans1) => {
    // Quit
    if (ans1.whatToDo == "Quit") {
      return;
    }

    // view all departments
    if (ans1.whatToDo == "View All Departments") {
      viewDepartments().then(() => {
        generate();
      });
    }

    // view all roles
    if (ans1.whatToDo == "View All Roles") {
      viewRoles().then(() => {
        generate();
      });
    }

    if (ans1.whatToDo == "View All Employees") {
      viewEmployees().then(() => {
        generate();
      });
    }

    // add a department
    if (ans1.whatToDo == "Add a Department") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "departmentName",
            message: "What is the name of the department?",
          },
        ])
        .then((ans2) => {
          addDepartment(ans2.departmentName);
        })
        .then(() => {
          generate();
        });
    }

    // add a role
    if (ans1.whatToDo == "Add a Role") {
      let departments = await getDepartments();
      inquirer
        .prompt([
          {
            type: "input",
            name: "name",
            message: "What is the name of the role?",
          },
          {
            type: "input",
            name: "salary",
            message: "What is their salary?",
          },
          {
            type: "list",
            name: "department",
            message: "What department do they work in?",
            choices: [...departments],
          },
        ])
        .then((ans3) => {
          addRole(ans3.name, ans3.salary, ans3.department);
        })
        .then(() => {
          generate();
        });
    }

    // add an employee
    if (ans1.whatToDo == "Add an Employee") {
      let roles = await getRoles();
      inquirer
        .prompt([
          {
            type: "input",
            name: "firstName",
            message: "What is the employee's first name?",
          },
          {
            type: "input",
            name: "lastName",
            message: "What is the employee's last name?",
          },
          {
            type: "list",
            name: "role",
            message: "What is the employee's role?",
            choices: [...roles],
          },
          {
            type: "list",
            name: "manager",
            message: "Who is the employee's manager?",
            choices: [
              "Ty Ayelloribbin",
              "Jack Aranda",
              "Percy Vere",
              "Hugo First",
            ],
          },
        ])
        .then((ans4) => {
          addEmployee(ans4.firstName, ans4.lastName, ans4.role, ans4.manager);
        })
        .then(() => {
          generate();
        });
    }

    // get employees and update
    if (ans1.whatToDo == "Update Employee Role") {
      const employees = await getEmployees();
      const roles = await getRoles();
      inquirer
        .prompt([
          {
            type: "list",
            name: "employee",
            message: "Which employee's role do you want to update?",
            choices: [...employees],
          },
          {
            type: "list",
            name: "role",
            message:
              "Which role do you want to assign to the selected employee?",
            choices: [...roles],
          },
        ])
        .then((ans5) => {
          updateEmployee(ans5.employee, ans5.role);
        })
        .then(() => {
          generate();
        });
    }
  });
};

generate();
