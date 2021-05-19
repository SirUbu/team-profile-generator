// LOGIC FOR EMPLOYEE CLASS OPERATOR

// class constructor for new employee
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = parseInt(id);
        this.email = email;
    };

    // returns employee name
    getName() {
        return this.name;
    };

    // returns the employee id
    getId() {
        return this.id;
    };

    // returns the employee email
    getEmail() {
        return this.email;
    };

    // returns the employee role set as 'Employee'
    getRole() {
        this.role = 'Employee'
        return this.role;
    };
};

// export Employee object
module.exports = Employee;