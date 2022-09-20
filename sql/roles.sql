use employeeDB;

CREATE TABLE roles (
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50),
    salary DECIMAL(9,2),
    department VARCHAR(50)
)