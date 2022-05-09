// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What's the project title? (Required)",
        name: "title",
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            else {
                console.log('Please enter your project title!');
                return false;
            }
        }

    },
    {
        type: "input",
        message: "Describe your project (Required)",
        name: "description",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            }
            else {
                console.log('Please enter your project description!');
                return false;
            }
        }
    },
    {
        type: "input",
        message: "Provide the steps for the installation (Required)",
        name: "installation",
        validate: installationInput => {
            if (installationInput) {
                return true;
            }
            else {
                console.log('Please enter your project installation steps!');
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What are the usages for this project? (Required)",
        name: "usages",
        validate: usageInput => {
            if (usageInput) {
                return true;
            }
            else {
                console.log('Please enter your project usage!');
                return false
            }
        }
    },
    {
        type: "list",
        message: "Choose application license",
        name: "license",
        choices: [
            'Apache 2.0',
            'Boost Software',
            'BSD 3-Clause',
            'none'
        ]
    },
    {
        type: "input",
        message: "If users would like to contribute, what are the guidelines?",
        name: "contributing"
    },
    {
        type: "input",
        message: "Tests Instructions (Required)",
        name: "tests",
        validate: testsInput => {
            if (testsInput) {
                return true;
            }
            else {
                console.log('Please enter your project tests instructions!');
                return false
            }
        }
    },
    {
        type: "input",
        message: "Enter Github username (Required)",
        name: "github",
        validate: githubUsernameInput => {
            if (githubUsernameInput) {
                return true;
            }
            else {
                console.log('Please enter your Github username!');
                return false
            }
        }
    },
    {
        type: "input",
        message: "Enter Email Addresss (Required)",
        name: "email",
        validate: emailInput => {
            if (emailInput) {
                return true;
            }
            else {
                console.log('Please enter your email!');
                return false
            }
        }
    },

];

const displayQuestions = () => {

    inquirer.prompt([title, description, installation, agua, mantecado] = questions)
        .then(response => {
            console.log(response);
            // TODO: Create a function to write README file
            fs.writeFile('./ExampleREADME.md', generateMarkdown(response), (error) => {
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
