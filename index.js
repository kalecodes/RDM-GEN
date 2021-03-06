// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true
                } else {
                    console.log('Please enter the name of your project!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true
                } else {
                    console.log('Please enter a description of the project!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide any necessary installation instructions.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide any necessary usage information.'
        },
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to add a license?',
            default: true
        },
        {
            type: 'list',
            name: 'license',
            message: "Please choose the license you would like to use.",
            choices: ['GNU-General-Public', 'Apache', 'MIT', 'None'],
            when: ({ confirmLicense }) => {
                if (confirmLicense) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Please describe any contribution guidelines.'
        },
        {
            type: 'message',
            name: 'tests',
            message: 'Please describe any test instructions.'
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
            validate: userInput => {
                if (userInput) {
                    return true
                } else {
                    console.log("Please enter your GitHub username!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true
                } else {
                    console.log('Please enter your email address!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'contact',
            message: 'Please provide contact instructions for user questions.'
        }
]


// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err => {
        if (err) {
            throw(err);
        }
        console.log('File created!')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (projectData) {
            console.log(projectData)
            writeToFile("./dist/README.md", generateMarkdown(projectData))
        })
        .catch(err => {
            console.log(err)
        })
}

// Function call to initialize app
init();
