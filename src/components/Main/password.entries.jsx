import React from 'react';

export default function password_entries(prop) {

    return (
        <>
            <button className="mt-3 py-3 px-8 bg-gray-900 hover:bg-gray-700" onClick={prop.ClickFunction}>{prop.entry_name}</button>
        </>);

}