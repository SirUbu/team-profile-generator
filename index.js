// NODE INDEX.JS INVOKED LOGIC

// require dependencies
const { managerPrompts, engineerPrompts, internPrompts, menuPrompt} = require('./utils/prompts');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const pageTemplate = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');


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

                        let index = team.interns.length - 1;
                        console.log(`------------------------------\nAdded intern ${team.interns[index].getName()}\n------------------------------`);

                        return addTeamMembers();
                    });
            } else {
                return console.log(`==============================\nFinalized adding team members\n==============================`);
            }
        })      
};

// log that application is starting
console.log(`=======================\nLet's create your team!\n=======================`);

// execute prompts followed by writing data to html
managerPrompts()
    .then(({ name, id, email, officeNumber}) => {
        team.manager.push(new Manager(name, id, email, officeNumber));
        console.log(`------------------------------\nAdded manager ${team.manager[0].getName()}\n------------------------------`);
    })
    .then(addTeamMembers)
    .then(() => {
        return pageTemplate(team)
    })
    .then(templateResponse => {
        return writeFile(templateResponse);
    })
    .then(writeFileResponse => {
        console.log(`==================\n${writeFileResponse.message}\n==================`);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(`================================\n${copyFileResponse.message}\n================================`);
    })
    .catch(error => {
        console.log(error);
    });
