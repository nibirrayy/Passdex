const fs = require('fs');

const readVaults = () => {
    const homedir = require('os').homedir();
    const dir = `${homedir}/.passdex/vaults`;

    const files = fs.readdirSync(dir);
    return files;
}


const loadVault = () => { }

export { readVaults };