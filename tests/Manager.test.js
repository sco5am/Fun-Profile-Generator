const Manager = require('../lib/Manager');
const teamMember = new Manager('Samuel', '4201997', 'sco5am@yahoo.com', '555');

test('test if the Manager object can get the constructor values', () => {
    expect(teamMember.name).toBe('Samuel');
    expect(teamMember.id).toBe('4201997');
    expect(teamMember.email).toBe('sco5am@yahoo.com');
    expect(teamMember.officeNumber).toBe('555');
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

test('will get the office number from the getOfficeNumber() method', () => {
    expect(teamMember.getOfficeNumber()).toBe('555');
});

test('will get the member from the getRole() method', () => {
    expect(teamMember.getRole()).toBe('Manager');
});