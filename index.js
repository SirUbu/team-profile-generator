// NODE INDEX.JS INVOKED LOGIC

// require dependencies
const inquirer = require('inquirer');
const { managerPrompts, engineerPrompts, internPrompts, menuPrompt} = require('./utils/prompts');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// object to store team members
const team = {
    manager: [],
    engineers: [],
    interns: []
};

// function to add team members and check if finalizeTeam selected
function addTeamMembers() {
    return menuPrompt()
        .then(choice => {
            if (choice.option === 'Add Engineer') {
                return engineerPrompts()
                    .then(({ name, id, email, github }) => {
                        team.engineers.push(new Engineer(name, id, email, github));

                        let index = team.engineers.length - 1;
                        console.log(`------------------------------\nAdded engineer ${team.engineers[index].getName()}\n------------------------------`);

                        return addTeamMembers();
                    });
            } else if (choice.option === 'Add Intern') {
                return internPrompts()
                    .then(({ name, id, email, school }) => {
                        team.interns.push(new Intern(name, id, email, school));

                        let index = team.engineers.length - 1;
                        console.log(`------------------------------\nAdded intern ${team.engineers[index].getName()}\n------------------------------`);

                        return addTeamMembers();
                    });
            } else {
                return console.log(`==============================\nFinalized adding team members\n==============================`);
            }
        })      
};

console.log(`=======================\nLet's create your team!\n=======================`);

managerPrompts()
    .then(({ name, id, email, officeNumber}) => {
        team.manager.push(new Manager(name, id, email, officeNumber));
        console.log(`------------------------------\nAdded manager ${team.manager[0].getName()}\n------------------------------`);
    })
    .then(addTeamMembers);
