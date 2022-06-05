// tests for the employees
const Employee = require('../lib/Employee');
// initiates the function to make sure it works
test('initiates the employee instance', () => {
    // emp = employee
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
});
// makes sure the name shows up properly
test('creates an employee name', () => {
    const name = 'Gus';
    const emp = new Employee(name);

    expect(emp.name).toBe('Gus');
});
// makes sure the id shows up
test('creates an employee id', () => {
    const testing = '69';
    const emp = new Employee('Gerus', testing);

    expect(emp.id).toBe(testing);
});
// makes sure the email shows up
test('created an employee email', () => {
    const testing = 'random@random.com';
    const emp = new Employee('Gerus', 1, testing);

    expect(emp.email).toBe(testing); 
});
// makes sure the function gets the name set by user
test('can get the name from the getName()', () => {
    const testing = 'Gus';
    const emp = new Employee(testing);

    expect(emp.getName()).toBe(testing);
});
// makes sure the getID function works selected by the user
test('can get the Id from the getId()', () => {
    const testing = 69;
    const emp = new Employee('Gerus', testing);

    expect(emp.getId()).toBe(testing);
});
// gets the email the user selects 
test('can get the email from the getEmail()', () => {
    const testing = 'random@random.com';
    const emp = new Employee('Gerus', 1, testing);

    expect(emp.getEmail()).toBe(testing);
});
// will see the role the user sets for the employee
test('getRole() should return Employee', () => {
    const testing = 'Employee';
    const emp = new Employee('Gus', 1, 'random@random.com');

    expect(emp.getRole()).toBe(testing);
});