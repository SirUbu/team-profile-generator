// USES SRC HTML AND CSS TO WRITE AND COPY FILES TO DIS/ FOR SITE

const fs = require('fs');


// function to write html file using the HTML page template
const writeFile = pageTemplate => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', pageTemplate, err => {
            if (err) {
                reject(err);
                return;
            }

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

// export the writeFile and copyFile functions
module.exports = { writeFile, copyFile };