// LOGIC FOR EMPLOYEE CLASS OPERATOR

// require dependencies
const inquirer = require('inquirer');

// class constructor for new employee
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = parseInt(id);
        this.email = email;
    }

    // returns employee name
    getName() {
        return this.name;
    };

    // returns the employee id
    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole(newRole) {
        if (!this.role) {
            this.role = 'Employee'
        } else {
            this.role = newRole;
        }
        return this.role;
    };
};

// export Employee object
module.exports = Employee;