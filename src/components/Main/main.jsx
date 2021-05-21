import React, { createContext, useEffect, useState } from 'react';


import Vault from './vault.jsx';
import Category from './category.jsx';
import Passwords from './passwords.jsx';
import Details from './details.jsx'

export const vaultContext = createContext();

export default function Main() {


    const [vaultData, setvaultData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();


    return (
        <>
            <vaultContext.Provider value={{ vaultData, setvaultData, selectedCategory, setSelectedCategory }} >
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