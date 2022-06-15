// required modules
const inquirer = require('inquirer');
const questions = require('./questions.js');
const generatePage = require('./utils/generateMarkdown.js');


//function to initialize app
function init() { 
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        // function to write README file
        generatePage.generateMarkdown(answers);
    })
}

// Function call to initialize app
init();
