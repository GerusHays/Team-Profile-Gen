const Employee = require('../lib/Employee');

test('initiates the employee instance', () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
});

test('creates an employee name', () => {
    const name = 'Gus';
    const emp = new Employee(name);

    expect(emp.name).toBe('Gus');
});

test('creates an employee id', () => {
    const testing = '69';
    const emp = new Employee('Gerus', testing);

    expect(emp.id).toBe(testing);
});

test('created an employee email', () => {
    const testing = 'random@random.com';
    const emp = new Employee('Gerus', 1, testing);

    expect(emp.email).toBe(testing); 
});

test('can get the name from the getName()', () => {
    const testing = 'Gus';
    const emp = new Employee(testing);

    expect(emp.getName()).toBe(testing);
});

test('can get the Id from the getId()', () => {
    const testing = 69;
    const emp = new Employee('Gerus', testing);

    expect(emp.getId()).toBe(testing);
});

test('can get the email from the getEmail()', () => {
    const testing = 'random@random.com';
    const emp = new Employee('Gerus', 1, testing);

    expect(emp.getEmail()).toBe(testing);
});

test('getRole() should return Employee', () => {
    const testing = 'Employee';
    const emp = new Employee('Gus', 1, 'random@random.com');

    expect(emp.getRole()).toBe(testing);
});