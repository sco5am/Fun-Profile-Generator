const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {

        super(name, id, email);

        this.githubUsername = githubUsername;
    }

    getGithubUsername() {
        return this.githubUsername;
    }

    getMember() {
        return "Engineer";
    }
}

module.exports = Engineer