import React from 'react';


export default function Category_entries({ Category_name, ClickFunction }) {
    return (
        <>
            <button className="flex py-3 px-8 bg-gray-800 hover:bg-gray-700" onClick={ClickFunction}>{Category_name}</button>
        </>
    )

}