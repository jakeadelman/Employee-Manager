# Employee Manager

## Description
Employee Manage is a useful command line application to manage your Employees using an MySQL database.

## Installation Instructions
1. Install MySQL
2. Login to MySQL using ```mysql -u root -p```
3. Enter your password (should be "password")
4. Run the sql queries one by one in the ./sql folder using ```source ./sql/(filename)```

## Usage
Set up your MySQL database and add your connection details in the ```./lib/connection.js``` file.

Add the following tables from with the schema from the ```./sql``` folder. Departments, Employees and Roles.

Start the app using ```npm start```

## Demo
![demo picture](https://github.com/jakeadelman/Employee-Manager/blob/master/pictures/employeemanager.png)

## Liscence
MIT Liscence
