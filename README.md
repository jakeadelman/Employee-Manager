# Employee Manager

## Description
Employee Manager is a useful command line application to manage your Employees using an [MySQL](https://www.mysql.com/) database. Choose from a variety of options to view, add or edit employees and more right from this command line interface. The application uses [Inquirer.js](https://www.npmjs.com/package/inquirer) to run and display commands.

## Table of Contents
* [Installation Instructions](#installation)
* [Usage](#usage)
* [Demo](#demo)
* [Liscence](#liscence)

<a name="installation"><a/>

## Installation Instructions

1. Install MySQL

### Login to MySQL using 
```
$ mysql -u root -p
```

### Run the sql queries one by one
```
$ source ./sql/(filename)
```

### To install the packages

```
$ npm i 
```
  
<a name="usage"></a>

## Usage

### Start the command line application
```
$ npm start
```

### Commands
```
-> View all employees
Returns a list of all employees. (First Name, Last Name, Title, Department, Salary, Manager)

-> Add an employee
Add an employee enter First Name, Last Name, Choose a Role, Choose a Manager.

-> Update an employee role
Updates an employee role. Choose the employee then choose the role you would like to update.

-> View all roles
Returns a list of all roles. (Id, Title, Salary, Department).

-> Add a role
Add a role enter the name of the role, Salary, and what department they work in.

-> View all departments
Returns a lis of all departments. (Id, Department Name)

-> Add a department
Add a department enter the department name.

```
  
<a name="demo"></a>

## Demo
![demo picture](https://github.com/jakeadelman/Employee-Manager/blob/master/pictures/employeemanager.png)

<a name="liscence"></a> 
 
## Liscence
MIT Liscence
