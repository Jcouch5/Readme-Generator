// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const askQuestions = () =>{
    return inquirer
    .prompt([
    {
        type: 'input',
        message: "What is your project's title?",
        name: 'fileName'
    },
    {
        type: 'input',
        message: "Please enter a Description of the Project:",
        name: 'description'
    },
    {
        type: 'input',
        message: "How do I use this project?",
        name: 'use'
    },
    {
        type: 'input',
        message: "How do I install this project?",
        name: 'install'
    },
    {
        type: 'input',
        message: "How do I contribute to this project?",
        name: 'contribution'
    },
    {
        type: 'input',
        message: "How do I test this project?",
        name: 'test'
    },
    {
        type: 'list',
        message: "What licenses (if any) does this project use?",
        name: 'license',
        choices: ["none"]
    },
    {
        type: 'input',
        message: "Please enter your GitHub username.",
        name: 'gitHub'
    },
    {
        type: 'input',
        message: "Please enter your Email.",
        name: 'email'
    }
]);
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, (err) => 
    err ? console.log('Could not create the README file') : console.log(`${fileName} README has been created!`))
}

// TODO: Create a function to initialize app
function init() {
    askQuestions()
    .then ((answers) => writeToFile(answers.fileName, "hello"))
}

// Function call to initialize app
init();
