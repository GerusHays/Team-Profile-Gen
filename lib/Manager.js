// requries the employee js to get the name, id and email to work
const Employee = require("./Employee");
// extends for the functions
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        
        this.officeNumber = officeNumber;
    }
    // has office number specific to manager
    getOfficeNumber() {
        return this.officeNumber;
    }
    // will return manager
    getRole() {
        return "Manager";
    }
}
// exports this throughout the folder
module.exports = Manager;