// PROMPT USER FOR DATA

// require dependencies
const inquirer = require('inquirer');

// function for manager prompts
function managerPrompts() {
    console.log(`---------------------\nAdd your team manager\n---------------------`);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter employee name:',
            validate: nameInput => {
                if (nameInput) return true;
                else {
                    console.log('Enter a valid employee name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee ID:',
            validate: idInput => {
                if (idInput) return true;
                else {
                    console.log('Enter a valid employee ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email:',
            validate: emailInput => {
                if (emailInput) return true;
                else {
                    console.log('Enter a valid employee email.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter manager's office number:",
            validate: officeNumberInput => {
                if (officeNumberInput) return true;
                else {
                    console.log('Enter a valid office number.');
                    return false;
                }
            }
        }
    ]);
};

// function for engineer prompts
function engineerPrompts() {
    console.log(`---------------\nAdd an engineer\n---------------`);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter employee name:',
            validate: nameInput => {
                if (nameInput) return true;
                else {
                    console.log('Enter a valid employee name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee ID:',
            validate: idInput => {
                if (idInput) return true;
                else {
                    console.log('Enter a valid employee ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email:',
            validate: emailInput => {
                if (emailInput) return true;
                else {
                    console.log('Enter a valid employee email.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter engineer's GitHub username:",
            validate: githubInput => {
                if (githubInput) return true;
                else {
                    console.log('Enter a valid GitHub username.');
                    return false;
                }
            }
        }
    ]);
};

// function for intern prompts
function internPrompts() {
    console.log(`-------------\nAdd an intern\n-------------`);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter employee name:',
            validate: nameInput => {
                if (nameInput) return true;
                else {
                    console.log('Enter a valid employee name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee ID:',
            validate: idInput => {
                if (idInput) return true;
                else {
                    console.log('Enter a valid employee ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email:',
            validate: emailInput => {
                if (emailInput) return true;
                else {
                    console.log('Enter a valid employee email.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter intern's school:",
            validate: schoolInput => {
                if (schoolInput) return true;
                else {
                    console.log('Enter a valid school.');
                    return false;
                }
            }
        }
    ]);
};

// function for menu prompt
function menuPrompt() {
    console.log(`-------------------\nSelect next action:\n-------------------`);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Would you like to:',
            choices: ['Add Engineer', 'Add Intern', 'Finalize Team']
        }
    ]);
};

module.exports = {managerPrompts, engineerPrompts, internPrompts, menuPrompt};