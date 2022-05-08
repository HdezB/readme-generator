// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What's the project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Describe your project",
        name: "description"
    },
    {
        type: "input",
        message: "Provide the steps for the installation",
        name: "installation"
    },
    {
        type: "input",
        message: "What are the usages for this project?",
        name: "usages"
    },
    {
        type: "list",
        message: "Choose application license",
        name: "license",
        choices: [
            'Apache 2.0',
            'Boost Software',
            'BSD 3-Clause'
        ]
    },
    {
        type: "input",
        message: "If users would like to contribute, what are the guidelines?",
        name: "contributing"
    },
    {
        type: "input",
        message: "Tests Instructions",
        name: "tests"
    },
    {
        type: "input",
        message: "Enter Github username",
        name: "github"
    },
    {
        type: "input",
        message: "Enter Email Addresss",
        name: "email"
    },

];

const displayQuestions = () => {

    inquirer.prompt([title, description, installation, agua, mantecado] = questions)
        .then(response => {
            console.log(response);
            // TODO: Create a function to write README file
            fs.writeFile('./README.md', generateMarkdown(response), (error) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Responses Saved!");
                }
            })
        });
}
// TODO: Create a function to initialize app
function init() { displayQuestions() };

// Function call to initialize app
init();
