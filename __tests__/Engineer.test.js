const Engineer = require('../lib/Engineer');

test('initiates the engineer instance', () => {
    const emp = new Engineer();
    expect(typeof(emp)).toBe("object");
});

test('getRole() should return Engineer', () => {
    const testing = 'Engineer';
    const emp = new Engineer('Gerus', 1, 'random@random.com');

    expect(emp.getRole()).toBe(testing);
});