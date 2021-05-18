/*
This will run at the startup of the application and will check if the .passdex
dirctory exists if not then it will create it
*/


const fs = require('fs');

// Storing location of homedirectory

const createCheckHomeDir = () => {

    const homedir = require('os').homedir();

    try {
        if (!fs.existsSync(`${homedir}/.passdex`)) {
            fs.mkdirSync(`${homedir}/.passdex`)
            fs.mkdirSync(`${homedir}/.passdex/vaults`)
        }
        else {
            console.log("Directory already exists")
        }
    }
    catch (err) {
        console.log(err);
    }
}


module.exports = createCheckHomeDir;
