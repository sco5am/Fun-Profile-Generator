const Engineer = require('../lib/Engineer');
const teamMember = new Engineer('Samuel', '4201997', 'sco5am@yahoo.com', 'sco5am');

test('test if the Intern object can get the constructor values', () => {
    expect(teamMember.name).toBe('Samuel');
    expect(teamMember.id).toBe('4201997');
    expect(teamMember.email).toBe('sco5am@yahoo.com');
    expect(teamMember.githubUsername).toBe('sco5am');
});

test('will get the name from the getName() method', () => {
    expect(teamMember.getName()).toBe('Samuel');
});

test('will get the id from the getId() method', () => {
    expect(teamMember.getId()).toBe('4201997');
});

test('will get the email from the getEmail() method', () => {
    expect(teamMember.getEmail()).toBe('sco5am@yahoo.com');
});

test('will get the office number from the getSchool() method', () => {
    expect(teamMember.getGithubUsername()).toBe('sco5am');
});

test('will get the member from the getRole() method', () => {
    expect(teamMember.getRole()).toBe('Engineer');
});