// requires the employee js to work
const Employee = require("./Employee");
// super for the name id and email to work for the intern
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }
    // specific to the intern
    getSchool() {
        return this.school;
    }
    // role will return intern
    getRole() {
        return "Intern";
    }
}
// use intern throughout the function
module.exports = Intern;