// requires engineer js for the tests
const Engineer = require('../lib/Engineer');
// initiates instances of engineer object
test('initiates the engineer instance', () => {
    const emp = new Engineer();
    expect(typeof(emp)).toBe("object");
});
// test strings are self explanatory
test('creates the engineers githubusername', () => {
    const testing = 'githubusername';
    const emp= new Engineer('Gerus', 1, 'random@random.com', testing);

    expect(emp.github).toBe(testing);
});

test('get the engineers githubusername from getGithub()', () => {
    const testing = 'githubusername';
    const emp= new Engineer('Gerus', 1, 'random@random.com', testing);

    expect(emp.getGithub()).toBe(testing);
})

test('getRole() should return Engineer', () => {
    const testing = 'Engineer';
    const emp = new Engineer('Gerus', 1, 'random@random.com', 'githubusername');

    expect(emp.getRole()).toBe(testing);
});