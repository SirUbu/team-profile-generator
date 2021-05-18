// NODE INDEX.JS INVOKED LOGIC

// TEST SETUP WAS SUCCESSFUL
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'testResponse',
            message: 'Write something to ensure everything is working.'
        }
    ])
    .then(answers => {
        console.log(answers);
        console.log(answers.testResponse);
    })
    .catch(error => {
        console.log(error);
    })
