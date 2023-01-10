const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const generateHTML = require("./src/generate-html");
const path = require("path");
const output_dir = path.resolve(__dirname, "output");
const outputPath = path.join(output_dir, "team.html");
const teamMembers = [];

const managerPrompt = () => {
  return inquirer.prompt([
      {
        name: "name",
        message: "What is your name?",
        type: "input",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your name!");
            return false;
          }
        },
      },
      {
        name: "employeeId",
        message: "Please enter your employee ID",
        type: "input",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log("Please enter your employee ID!");
            return false;
          }
        },
      },
      {
        name: "email",
        message: "Please enter your email address",
        type: "input",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter your email address!");
            return false;
          }
        },
      },
      {
        name: "officeNumber",
        message: "Enter your office number (Required)",
        type: "input",
        validate: (officeNumber) => {
          if (officeNumber) {
            return true;
          } else {
            console.log("Please enter your office number!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const manager = new Manager(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      menuPrompt();
    });
};

const menuPrompt = () => {
  return inquirer.prompt([
      {
        name: "menu",
        message: "Please select an option to continue building your team:",
        choices: [
          "add an engineer",
          "add an intern",
          "Im finished building my team",
        ],
        type: "list",
      },
    ])
    .then((userChoice) => {
      switch (userChoice.menu) {
        case "add an engineer":
          engineerPrompt();
          break;
        case "add an intern":
          internPrompt();
          break;
        default:
          finishedTeam();
      }
    });
};

const engineerPrompt = () => {
  console.log(`Add a New Engineer`);

  return inquirer
    .prompt([
      {
        name: "name",
        message: "What is the name of your engineer?",
        type: "input",
        validate: (engineerName) => {
          if (engineerName) {
            return true;
          } else {
            console.log("Please enter the name of an engineer");
            return false;
          }
        },
      },
      {
        name: "employeeId",
        message: "Enter your employee ID",
        type: "input",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log("Please enter your employee ID");
            return false;
          }
        },
      },
      {
        name: "email",
        message: "Enter your email address",
        type: "input",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter your email address");
            return false;
          }
        },
      },
      {
        name: "githubUsername",
        message: "Enter your Github username.",
        type: "input",
        validate: (githubUsername) => {
          if (githubUsername) {
            return true;
          } else {
            console.log("Please enter your Github username");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const engineer = new Engineer(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.githubUsername
      );
      teamMembers.push(engineer);
      menuPrompt();
    });
};

const internPrompt = () => {
  console.log(`Add a new Intern (all fields are required)`);

  return inquirer
    .prompt([
      {
        name: "name",
        message: "What is the name of the intern?",
        type: "input",
        validate: (internName) => {
          if (internName) {
            return true;
          } else {
            console.log("Please enter the name of the intern!");
            return false;
          }
        },
      },
      {
        name: "employeeId",
        message: "Enter your employee ID",
        type: "input",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log("Please enter your employee ID!");
            return false;
          }
        },
      },
      {
        name: "email",
        message: "Enter your email address",
        type: "input",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter your email address!");
            return false;
          }
        },
      },
      {
        name: "school",
        message: "Enter your school name.",
        type: "input",
        validate: (school) => {
          if (school) {
            return true;
          } else {
            console.log("Please enter your school name!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const intern = new Intern(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      menuPrompt();
    });
};

const finishedTeam = () => {
  console.log(`Finished building team`);

  if (!fs.existsSync(output_dir)) {
    fs.mkdirSync(output_dir);
  }
  fs.writeFileSync(outputPath, generateHTML(teamMembers), "utf-8");
};

managerPrompt();
