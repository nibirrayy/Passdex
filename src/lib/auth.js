const fs = require('fs');


class Auth {

    constructor() {
        this.authenticated = false;
        this.homedir = require('os').homedir()
    }


    newStart() {
        const authFile = `${this.homedir}/.passdex/auth.json`;
        let defaultCreds = {
            username: 'username',
            password: 'password'
        };
        let data = JSON.stringify(defaultCreds);
        fs.writeFileSync(authFile, data);
    }


    login(username, password) {
        if (fs.existsSync(`${this.homedir}/.passdex/auth.json`)) {
            let creds = fs.readFileSync(`${this.homedir}/.passdex/auth.json`);
            let data = JSON.parse(creds);

            if (data.username == username && data.password == password) {
                this.authenticated = true;
            }
        }
        else {
            this.newStart();
            this.authenticated = true;
        }
        return this.authenticated;
    }


}



//const trail = new Auth();

//trail.login('username', 'passwod');

export default new Auth()