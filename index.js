// global variables

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Template = require("./src/page-template"); 
const inquirer = require("inquirer");
const fs = require("fs");

const employees = [];

// starts the app
function init() {
    newTeamMember();
};

// function for adding team members
function newTeamMember() {
    inquirer.prompt([{
        type: "input",
        name: "teamMemberName",
        message: "Enter the team member's name.",
        validate: teamMemberNameInput => {
            if (teamMemberNameInput) {
                return true;
            } else {
                console.log('Please enter the name of your team member.');
                return false;
            }
        }
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
        message: "Enter your team member's ID.",
        validate: teamMemberIdInput => {
            if (teamMemberIdInput) {
                return true;
            } else {
                console.log('Please enter your team members Id number.');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "teamMemberEmail",
        message: "Enter your team member's email.",
        validate: teamMemberEmailInput => {
            if (teamMemberEmailInput) {
                return true;
            } else {
                console.log('Please enter your team members email');
                return false;
            }
        },
        // .then for selecting the specific roles
    }]).then(function({ teamMemberName, teamMemberRole, teamMemberId, teamMemberEmail }) {
        let roleInput = "";
        if(teamMemberRole === "Manager") {
            roleInput = "officeNumber";
        } else if(teamMemberRole === "Engineer") {
            roleInput = "githubusername"
        } else {
            roleInput = "school"
        }
        inquirer.prompt([{
            type: "input",
            name: "roleInput",
            message: `Enter team member's ${roleInput}`,
            validate: roleUserInput => {
                if(roleUserInput) {
                    return true;
                } else {
                    console.log('Please enter the role office number, github, or school as applicable.');
                    return false;
                }
            }
        },
        {
            name: "additionalTeamMember",
            type: "list",
            choices: [
                "yes",
                "no"
            ],
            // .then for adding any additional team members
        }]).then(function({ roleInput, additionalTeamMember }) {
            let addMember;
            if(teamMemberRole === "Manager") {
                addMember = new Manager(teamMemberName, teamMemberId, teamMemberEmail, roleInput);
            } else if(teamMemberRole === "Engineer") {
                addMember = new Engineer(teamMemberName, teamMemberId, teamMemberEmail, roleInput);
            } else {
                addMember = new Intern(teamMemberName, teamMemberId, teamMemberEmail, roleInput);
            }
            // pushes the addmembers to employees
            employees.push(addMember);
            console.log(teamMemberName, employees);
            // if they select yes it will rerun the function so the user can select the variables for that role
            if(additionalTeamMember == "yes") {
                newTeamMember();
            // else if they dont want to add any more members it will save and generate the file
            } else {
                let generateHtml = Template(employees)
                fs.writeFile('./dist/index.html',
                generateHtml,
                function(err) {
                    if(err) {
                    console.log(err);
                    } else {
                    console.log('file saved');
                    };
                }
                );
            }
        });
    });
};
init();