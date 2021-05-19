// LOGIC FOR MANAGER CLASS OPERATOR
// extended from employee

// require dependencies
const Employee = require('./Employee');

// class construction for new manager
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        
        this.officeNumber = officeNumber;
    };

    // returns the manager officeNumber
    getOfficeNumber() {
        return this.officeNumber;
    }

    // returns the manager role overridden as 'Manager'
    getRole() {
        this.role = 'Manager';
        return this.role;
    };
};

// export Manager object
module.exports = Manager;