import React from 'react';


export default function Vault_entires(props) {
    return (
        <div className="rounded-full bg-gray-100 h-24 w-24 m-3.5 flex items-center justify-center shadow-2xl">
            <b>{props.vaultName}</b>
        </div>
    );
}