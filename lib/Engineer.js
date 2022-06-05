// requires employee js to work
const Employee = require("./Employee");
// engineer class extending employee with super for name id and email
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }
    // github specific to engineer
    getGithub() {
        return this.github;
    }
    // role will return engineer
    getRole() {
        return "Engineer";
    }
}
// uses this js throughout the folder
module.exports = Engineer;

