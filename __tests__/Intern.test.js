const Intern = require('../lib/Intern');

test('initiates the intern instance', () => {
    const emp = new Intern();
    expect(typeof(emp)).toBe("object");
});

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