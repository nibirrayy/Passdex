import React, { useEffect, useContext } from 'react';

import CategoryEntry from './category.entry.jsx'

import { vaultContext } from './main.jsx'


export default function Category() {

    const { vaultData, setvaultData, setSelectedCategory } = useContext(vaultContext)

    let counter = 1;

    const addNewGroup = () => {
        const defaultGroup = {
            "id": counter,
            "category": "Default Category",
            "entries": [

            ]
        }
        let newdata = vaultData
        newdata.push(defaultGroup)
        setvaultData(newdata);
        //you can write the entire vault again to the file here
        counter++;
    }

    const categoryClickHandler = (category_id) => {
        setSelectedCategory(category_id);
    }

    return (
        <section className="relative h-screen w-2/12 bg-gray-800 text-gray-100 flex flex-col shadow-2xl">

            <h1
                className="flex mt-3 mb-3 text-center text-2xl font-bold text-blue-200 justify-center hover:text-white shadow-2xl">
                Category</h1>
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4 shadow-2xl" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd" />
            </svg>
            <div className="overflow-y-scroll flex flex-col" id="scroll">
                {
                    vaultData.map((category) => {
                        counter++;
                        return <CategoryEntry Category_name={category.category} key={category.id} ClickFunction={() => { categoryClickHandler(category.id) }} />
                    }
                    )}

                <button id="button" type="button" onClick={addNewGroup}
                    className="rounded-full pt-1 mr-auto ml-auto mb-2 h-8 w-32 text-sm text-white flex absolute inset-x-0 bottom-0 align-text-bottom transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-gray-500 hover:bg-gray-600 hover:shadow-lg focus:outline-none justify-center">
                    <b>+ NEW GROUP</b>

                </button>
            </div>
        </section>
    )
}