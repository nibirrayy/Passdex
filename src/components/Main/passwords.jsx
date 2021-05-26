import React, { useContext, useEffect, useState } from 'react';

import PasswordEntry from './password.entries.jsx';

import { vaultContext } from './main.jsx'

export default function Passwords() {

    const { vaultData, selectedCategory, selectedPassword, setSelectedPassword } = useContext(vaultContext);

    //const [data, setdata] = useState();
    let data = {}

    useEffect(() => {
        data = vaultData[selectedCategory - 1]
        //console.log(data)
        if (data != undefined) {
            //console.log(data)
        }
    }, [selectedCategory])

    const passwordClickHandler = (passwordId) => {
        setSelectedPassword(passwordId);
    }


    return (
        <section className="relative h-screen w-3/12 bg-gray-900 text-gray-100 flex flex-col shadow-2xl">

            <h1 className="mt-3 text-center text-2xl font-bold text-blue-200 hover:text-white shadow-2xl">Passwords</h1>

            <div className="mt-3 mb-5 font-sans text-black flex items-center justify-center shadow-2xl">
                <div className="rounded-full border rounded overflow-hidden flex">
                    <input type="text" className="px-3 py-2 " placeholder="Search passwords..." />
                    <button className="flex items-center justify-center px-4 border-l">
                        <svg className="h-5 w-4 text-white " fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-5 w-5 shadow-2xl" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clip-rule="evenodd" />
            </svg>
            <div className="overflow-y-scroll" id="scroll">
                {
                    vaultData.map((category, index) => {
                        if (index == selectedCategory - 1) {
                            return (
                                category.entries.map(
                                    (password_items) => {
                                        //console.log(password_items.password_id)
                                        return (
                                            <PasswordEntry entry_name={password_items.title} ClickFunction={() => { passwordClickHandler(password_items.password_id) }} />
                                        )
                                    }
                                )
                            )

                        }
                    })
                }
            </div>
            <button id="button" type="button"
                className="rounded-full pt-1 mr-auto ml-auto mb-2 h-8 w-40 text-sm text-white flex absolute inset-x-0 bottom-0 align-text-bottom transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-gray-500 hover:bg-gray-600 hover:shadow-lg focus:outline-none justify-center shadow-2xl">
                <b>+ ADD ENTRY</b>

            </button>

        </section>
    );
}