// TESTS FOR INTERN CLASS OPERATOR

// require dependencies
const Intern = require('../lib/Intern');

test('creates a new intern object', () => {
    const intern = new Intern('John Doe', '341222', 'john.doe@company.com', 'Online University');

    expect(intern.name).toBe('John Doe');
    expect(intern.name).toEqual(expect.any(String));

    expect(intern.id).toBe('341222');
    expect(intern.id).toEqual(expect.any(String));

    expect(intern.email).toBe('john.doe@company.com');
    expect(intern.email).toEqual(expect.any(String));

    expect(intern.school).toBe('Online University');
    expect(intern.school).toEqual(expect.any(String));
});

test("gets intern's school", () => {
    const intern = new Intern('John Doe', '341222', 'john.doe@company.com', 'Online University');

    expect(intern.getSchool()).toEqual('Online University');
});

test("gets intern's role", () => {
    const intern = new Intern('John Doe', '341222', 'john.doe@company.com', 'Online University');

    expect(intern.getRole()).toEqual('Intern');
});