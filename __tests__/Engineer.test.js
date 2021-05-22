// TESTS FOR ENGINEER CLASS OPERATOR

// require dependencies
const Engineer = require('../lib/Engineer');

test('creates a new engineer object', () => {
    const engineer = new Engineer('John Doe', '341222', 'john.doe@company.com', 'johnGitHub');

    expect(engineer.name).toBe('John Doe');
    expect(engineer.name).toEqual(expect.any(String));

    expect(engineer.id).toBe('341222');
    expect(engineer.id).toEqual(expect.any(String));

    expect(engineer.email).toBe('john.doe@company.com');
    expect(engineer.email).toEqual(expect.any(String));

    expect(engineer.github).toBe('johnGitHub');
    expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's github", () => {
    const engineer = new Engineer('John Doe', '341222', 'john.doe@company.com', 'johnGitHub');

    expect(engineer.getGithub()).toEqual('johnGitHub');
});

test("gets engineer's role", () => {
    const engineer = new Engineer('John Doe', '341222', 'john.doe@company.com', 'johnGitHub');

    expect(engineer.getRole()).toEqual('Engineer');
});