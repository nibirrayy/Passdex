import React, { useContext, useEffect, useState } from 'react';

import VaultEntry from './vault.entries.jsx'
import { readVaults, loadVault } from '../../lib/vaults.js';
import { vaultContext } from './main.jsx';


export default function Vault() {

    const [vaults, setVaults] = useState(readVaults())
    const { setvaultData } = useContext(vaultContext)

    const vaultClickHandler = (vaultName) => {
        const fileData = loadVault(vaultName);
        setvaultData(fileData);
    }

    return (
        <section className="relative h-screen w-26 bg-gray-700 flex justify-center shadow-2xl">
            <div className="overflow-y-scroll" id="scroll">
                {vaults.map((vault, index) => {
                    return <VaultEntry vaultName={vault} clickFunction={() => { vaultClickHandler(vault) }} key={index} />
                })}
            </div>
            <button id="button" type="button"
                className="rounded-full mr-auto ml-auto mb-2 h-8 w-24 text-lg text-white flex flex-wrap
           	absolute inset-x-0 bottom-0 align-text-bottom transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-gray-500 hover:bg-gray-600 hover:shadow-lg focus:outline-none justify-center shadow-2xl">
                <b>+</b>

            </button>


        </section >
    )
}