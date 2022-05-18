const Employee = require('../lib/Employee');

test('creates an employee name', () => {
    const name = 'Gus';
    const emp = new Employee(name);

    expect(emp.name).toBe('Gus');
});