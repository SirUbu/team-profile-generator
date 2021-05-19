// LOGIC FOR ENGINEER CLASS OPERATOR
// extended from employee

// require dependencies
const Employee = require('./Employee');

// class construction for new manager
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        
        this.github = github;
    };

    // returns the manager officeNumber
    getGithub() {
        return this.github;
    }

    // returns the manager role overridden as 'Manager'
    getRole() {
        this.role = 'Engineer';
        return this.role;
    };
};

// export Manager object
module.exports = Engineer;