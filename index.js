// global variables

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const employees = [];

// starts the app
function init() {
    newTeamMember();
};

// function for adding team members
function newTeamMember() {
    inquirer.prompt([
    {
        type: "input",
        name: "teamMemberName",
        message: "Enter the team member's name."
    },
    {
        name: "teamMemberRole",
        type: "list",
        message: "Select your team member's role.",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ],
    },
    {
        type: "input",
        name: "teamMemberId",
        message: "Enter your team member's ID."
    },
    {
        type: "input",
        name: "teamMemberEmail",
        message: "Enter your team member's email."
    },
    ]).then(function({ teamMemberName, teamMemberRole, teamMemberId, teamMemberEmail }) {

    })

}
    


// create a function for generating a Manager
// inquirer prompt 
// using manager classes

init();