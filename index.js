
// Import: node.js modules and exteral packages 
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./starter/utils/generateMarkdown");

// Questions array for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage information:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "Apache", "GPL"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide test instructions:",
  },
  {
    type: "input",
    name: "username",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];

// Function to write the README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("README.md successfully generated!");
    }
  });
}

// Function to initialisee program
function init() {
  // Prompt the user for input based on the array questions
  inquirer.prompt(questions).then((answers) => {
    // Generate markdown content based on user input
    const markdown = generateMarkdown(answers);
    // Write the generated markdown content to README.md file
    writeToFile("README.md", markdown);
  });
}

//  init function begin the program
init();