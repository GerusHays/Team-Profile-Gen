// requires intern.js to run the tests
const Intern = require('../lib/Intern');
// initiates the intern object instance
test('initiates the intern instance', () => {
    const emp = new Intern();
    expect(typeof(emp)).toBe("object");
});
// test strings are self explanatory
test('creates the interns school', () => {
    const testing = 'UofU';
    const emp= new Intern('Gerus', 1, 'random@random.com', testing);

    expect(emp.school).toBe(testing);
});

test('gets the school from the getSchool()', () => {
    const testing = 'UofU';
    const emp= new Intern('Gerus', 1, 'random@random.com', testing);

    expect(emp.getSchool()).toBe(testing);
})

test('getRole() should return Intern', () => {
    const testing = 'Intern';
    const emp = new Intern('Gerus', 1, 'random@random.com', 'UofU');

    expect(emp.getRole()).toBe(testing);
});