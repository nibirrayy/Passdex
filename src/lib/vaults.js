const fs = require('fs');

const readVaults = () => {
    const homedir = require('os').homedir();
    const dir = `${homedir}/.passdex/vaults`;

    const files = fs.readdirSync(dir);
    return files;
}


const loadVault = (fileName) => {
    const homedir = require('os').homedir();
    const dir = `${homedir}/.passdex/vaults`;
    const file = `${dir}/${fileName}`;

    let data = fs.readFileSync(file);
    data = JSON.parse(data);
    return data;
}


export { readVaults, loadVault };