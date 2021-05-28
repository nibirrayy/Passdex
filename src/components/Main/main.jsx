import React, { createContext, useEffect, useState } from 'react';


import Vault from './vault.jsx';
import Category from './category.jsx';
import Passwords from './passwords.jsx';
import Details from './details.jsx'

export const vaultContext = createContext();

export default function Main() {


    const [vaultData, setvaultData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedPassword, setSelectedPassword] = useState();

    useEffect(() => {
        console.log("Vault Data changed")
    }, [vaultData])

    return (
        <>
            <vaultContext.Provider value={{ vaultData, setvaultData, selectedCategory, setSelectedCategory, selectedPassword, setSelectedPassword }} >
                <main className="h-screen w-screen flex flex-wrap">

                    <Vault />
                    <Category />
                    <Passwords />
                    <Details />


                </main>
            </vaultContext.Provider>
        </>
    );
}