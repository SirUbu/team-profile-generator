// TESTS FOR EMPLOYEE CLASS OPERATOR

// require dependencies
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('John Doe', '341222', 'john.doe@company.com');

    expect(employee.name).toBe('John Doe');
    expect(employee.name).toEqual(expect.any(String));

    expect(employee.id).toBe('341222');
    expect(employee.id).toEqual(expect.any(String));

    expect(employee.email).toBe('john.doe@company.com');
    expect(employee.email).toEqual(expect.any(String));
});

test("gets employee's name", () => {
    const employee = new Employee('John Doe', '341222', 'john.doe@company.com');

    expect(employee.getName()).toEqual('John Doe');
});

test("gets employee's id", () => {
    const employee = new Employee('John Doe', '341222', 'john.doe@company.com');

    expect(employee.getId()).toEqual('341222');
});

test("gets employee's email", () => {
    const employee = new Employee('John Doe', '341222', 'john.doe@company.com');

    expect(employee.getEmail()).toEqual('john.doe@company.com');
});

test("gets employee's role", () => {
    const employee = new Employee('John Doe', '341222', 'john.doe@company.com');

    expect(employee.getRole()).toEqual('Employee');
});