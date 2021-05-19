import React, { useContext, useEffect, useState } from 'react';

import VaultEntry from './vault.entries.jsx'
import { readVaults, loadVault } from '../../lib/vaults.js';


export default function Vault() {

    const [vaults, setVaults] = useState(readVaults())

    //const { vaultData, setvaultData } = useContext(vaultContext)

    useEffect(() => {
        //const temp = readVaults()
        //console.log(temp)
        //setVaults(temp)
        // const trial = readVaults()
        // trial.forEach((ENTRY) => {
        //     console.log(ENTRY)
        // })
        console.log(vaults)
        //setNumbers([1, 2, 3, 4, 5, 6, 7, 8])
    }
        , [])


    const vaultClickHandler = (vaultName) => {
        const fileData = loadVault(vaultName);
        console.log(fileData)
    }

    return (
        <section className="relative w-26 bg-gray-700 flex flex-wrap justify-center shadow-2xl">
            <div>
                {vaults.map(vault => {
                    return <VaultEntry vaultName={vault} clickFunction={() => { vaultClickHandler(vault) }} />
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