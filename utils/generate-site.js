// USES SRC HTML AND CSS TO WRITE AND COPY FILES TO DIS/ FOR SITE

const fs = require('fs');


// function to write html file
const writeFile = pageTemplate => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', pageTemplate, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'HTML file created!'
            });
        });
    });
};

// function to copy css file
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
            reject(err);
            return;
            }
            
            resolve({
                ok: true,
                message:'Style sheet copied successfully!'
            });
        });
    });
};

module.exports = { writeFile, copyFile };