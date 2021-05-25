const fs = require('fs');
const crypto = require('crypto');

class Auth {

    constructor() {
        this.authenticated = false;
        this.homedir = require('os').homedir()
    }


    newStart() {
        const authFile = `${this.homedir}/.passdex/auth.json`;
        const secret = crypto.randomBytes(24).toString('hex');
        fs.writeFileSync(`${this.homedir}/.passdex/secret`, secret);
        const defaultUsername = crypto.createHmac('sha256', secret).update('username').digest('hex');
        const defaultPasssword = crypto.createHmac('sha256', secret).update('password').digest('hex');
        let defaultCreds = {
            username: defaultUsername,
            password: defaultPasssword
        };
        let data = JSON.stringify(defaultCreds);
        fs.writeFileSync(authFile, data);
    }

    hashed(data) {
        const secret = fs.readFileSync(`${this.homedir}/.passdex/secret`);
        const hash = crypto.createHmac('sha256', secret)
            .update(data)
            .digest('hex');
        return hash
    }


    login(username, password) {
        if (fs.existsSync(`${this.homedir}/.passdex/auth.json`)) {
            let creds = fs.readFileSync(`${this.homedir}/.passdex/auth.json`);
            let data = JSON.parse(creds);

            if (data.username == this.hashed(username) && data.password == this.hashed(password)) {
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


export default new Auth()