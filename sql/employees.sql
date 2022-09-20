use employeeDB;

CREATE TABLE employees (
	id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    title VARCHAR(50),
    manager VARCHAR(50),
    FOREIGN KEY (title) REFERENCES roles(title)
)