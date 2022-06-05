// employee class
class Employee {
    // constructing name id and email object
    constructor(name, id, email) {
        
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // gets the name id email and role throughout the folder
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}
// used employee throughout the folder
module.exports = Employee;