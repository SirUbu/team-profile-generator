// LOGIC FOR INTERN CLASS OPERATOR
// extended from employee

// require dependencies
const Employee = require('./Employee');

// class construction for new manager
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        
        this.school = school;
    };

    // returns the manager officeNumber
    getSchool() {
        return this.school;
    }

    // returns the manager role overridden as 'Manager'
    getRole() {
        this.role = 'Intern';
        return this.role;
    };
};

// export Manager object
module.exports = Intern;