// HTML PAGE TEMPLATE TO BE USED IN GENERATE-SITE.JS WITH DATA FROM INDEX.JS PROMPTS

// icon selector
function iconSelector(role) {
    if(role === "Manager") {
        return `<i class="fas fa-mug-hot"></i> Manager`
    }

    if(role === "Engineer") {
        return `<i class="fas fa-glasses"></i> Engineer`
    }

    if(role === "Intern") {
        return `<i class="fas fa-user-graduate"></i> Intern`
    }
};

// function to get unique item for each team member
function uniqueItem(teamMember) {
    if (teamMember.officeNumber) {
        return `<div class="list-group-item">Office Number: <a href="tel:${teamMember.getOfficeNumber()}">${teamMember.getOfficeNumber()}</a></div>`
    }

    if (teamMember.github) {
        return `<div class="list-group-item">GitHub: <a href="https://github.com/${teamMember.getGithub()}" target="_blank">${teamMember.getGithub()}</a></div>`
    }

    if (teamMember.school) {
        return `<div class="list-group-item">School: <a href="https://google.com/search?q=${teamMember.getSchool()}" target="_blank">${teamMember.getSchool()}</a></div>`

    }
};

// card generator for each team member in each sub array
function cardGenerator(teamData) {
    if (teamData.length > 0) {
        let cards = ''
        for (let i = 0; i < teamData.length; i++) {
            let teamMember = teamData[i];
            cards += `
            <div class="card rounded-3 bg-secondary m-2" style="width: 300px">
                <div class="card-title bg-primary text-light p-2">
                    <h3>${teamMember.getName()}</h3>
                    <h5>${iconSelector(teamMember.getRole())}</h5>
                </div>
                <div class="card-body">
                    <div class="list-group list-group-flush">
                        <div class="list-group-item">ID: ${teamMember.getId()}</div>
                        <div class="list-group-item">Email: <a href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a></div>
                        ${uniqueItem(teamMember)}
                    </div>
                </div>
            </div>
            `
        }
        return cards;
    } else {
        return '';
    }
};

// export the entire page html
module.exports = teamData => {
    return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Document</title>
    </head>
    <body class="bg-light">
        <header>
            <h1 class="bg-danger bg-gradient text-center text-light p-3">My Team</h1>
        </header>

        <main>
            <div class="container d-flex flex-wrap justify-content-around">
                ${cardGenerator(teamData.manager)}
                ${cardGenerator(teamData.engineers)}
                ${cardGenerator(teamData.interns)}
            </div>
        </main>

        <footer class="bg-danger bg-gradient text-center text-light p-3 fixed-bottom">
            <div>&copy;Sir Ubu <bdo dir="rtl">&copy;Sir Ubu</bdo></div>
        </footer>
    </body>
</html>
    `
};