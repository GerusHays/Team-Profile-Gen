const Manager = require('../lib/Manager');

test('initiates the manager instance', () => {
    const emp = new Manager();
    expect(typeof(emp)).toBe("object");
});

test('creates an manager officeNumber', () => {
    const testing = '555-123-4567';
    const emp = new Manager('Gerus', 1, 'random@random.com', testing);

    expect(emp.officeNumber).toBe(testing);
});

test('getOfficeNumber should get the officeNumber object', () => {
    const testing = '555-123-4567';
    const emp = new Manager('Gerus', 1, 'random@random.com', testing);

    expect(emp.getOfficeNumber()).toBe(testing);
});

test('getRole() should return Manager', () => {
    const testing = 'Manager';
    const emp = new Manager('Gerus', 1, 'random@random.com', '555-123-4567');

    expect(emp.getRole()).toBe(testing);
});