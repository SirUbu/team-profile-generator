// TESTS FOR MANAGER CLASS OPERATOR

// require dependencies
const Manager = require('../lib/Manager');

test('creates a new manager object', () => {
    const manager = new Manager('John Doe', '341222', 'john.doe@company.com', '(123) 456-7890');

    expect(manager.name).toBe('John Doe');
    expect(manager.name).toEqual(expect.any(String));

    expect(manager.id).toBe('341222');
    expect(manager.id).toEqual(expect.any(String));

    expect(manager.email).toBe('john.doe@company.com');
    expect(manager.email).toEqual(expect.any(String));

    expect(manager.officeNumber).toBe('(123) 456-7890');
    expect(manager.officeNumber).toEqual(expect.any(String));
});

test("gets manager's officeNumber", () => {
    const manager = new Manager('John Doe', '341222', 'john.doe@company.com', '(123) 456-7890');

    expect(manager.getOfficeNumber()).toEqual('(123) 456-7890');
});

test("gets manager's role", () => {
    const manager = new Manager('John Doe', '341222', 'john.doe@company.com', '(123) 456-7890');

    expect(manager.getRole()).toEqual('Manager');
});