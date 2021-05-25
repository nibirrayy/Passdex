const fs = require('fs');
const { machineIdSync } = require('node-machine-id');
const { createDecipheriv, scryptSync } = require('crypto');

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

    //let data = fs.readFileSync(file);

    let data = decryptVault(file);
    data = JSON.parse(data);
    return data;
}

const decryptVault = (filelocation) => {
    const MachineId = machineIdSync()
    const algorithm = 'aes-192-cbc';
    const homedir = require('os').homedir();
    const dir = `${homedir}/.passdex`;

    const secret = fs.readFileSync(`${dir}/secret`, 'utf8');

    const key = scryptSync(MachineId, 'salt', 24);
    const iv = scryptSync(secret, 'salt', 16);

    const decipher = createDecipheriv(algorithm, key, iv);

    let data = fs.readFileSync(filelocation, 'utf8');

    let decryptedData = decipher.update(data, "hex", "utf8");
    decryptedData += decipher.final("utf-8");

    return decryptedData;
}





export { readVaults, loadVault };