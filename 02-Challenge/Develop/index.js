// required modules
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions.js');
const generatePage = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(filename, JSON.stringify(data, null, 2), (err) => {
        if (err) console.log(err);
    });
};

// TODO: Create a function to initialize app
function init()  { }

// Function call to initialize app
init();
