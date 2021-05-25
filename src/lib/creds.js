/*This lib files allowa*/

const fs = require('fs');
const crypto = require('crypto');

const changeCreds = (NewUsername, NewPassword) => {

    const homedir = require('os').homedir();
    const authFile = `${homedir}/.passdex/auth.json`;

    const secret = fs.readFileSync(`${homedir}/.passdex/secret`).toString();

    const newUsername = crypto.createHmac('sha256', secret).update(NewUsername).digest('hex');
    const newPasssword = crypto.createHmac('sha256', secret).update(NewPassword).digest('hex');

    let creds = {
        username: newUsername,
        password: newPasssword
    };
    let data = JSON.stringify(creds);
    fs.writeFileSync(authFile, data);

}

module.exports = changeCreds;