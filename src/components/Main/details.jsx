import React, { useContext, useEffect, useState } from 'react';

import { vaultContext } from './main.jsx'

export default function Details() {

    const { vaultData, selectedPassword, selectedCategory, setvaultData } = useContext(vaultContext)

    //this is to handle the change of any fields
    const [title, setTitle] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    useEffect(() => {
        vaultData.forEach((category, index) => {
            if (index == selectedCategory - 1) {
                category.entries.forEach((password_items) => {
                    if (selectedPassword == password_items.password_id) {
                        setTitle(password_items.title);
                        setUsername(password_items.username);
                        setPassword(password_items.password);
                    }
                })
            }
        })
    }, [selectedPassword])


    const onTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const onUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const onSaveHandler = () => {
        const newData = vaultData.map((category, index) => {
            if (index == selectedCategory - 1) {
                return (
                    category.entries = category.entries.map((password_item) => {
                        if (selectedPassword == password_item.password_id) {
                            password_item.title = title;
                            password_item.username = username;
                            password_item.password = password;
                            return password_item;
                        }
                        return password_item;
                    })
                )
            }
            return category;
        })
        // We can save the complete vault 
        console.log(newData)
        //setvaultData(vaultData);
        //console.log(vaultData)
    }


    return (
        <section
            className="relative w-4/12 flex-1 bg-gradient-to-r via-white from-gray-100 to-gray-100 bg-opacity-80 shadow-2xl">
            <svg xmlns="http://www.w3.org/2000/svg"
                className="text-blue-500 hover:text-gray-600 mt-4 mr-auto ml-auto h-12 w-12 shadow-2xl" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>

            <form className=" mt-14 mb-20">
                <label className="hover:text-gray-600 ml-24 " htmlFor="title"><b>TITLE</b></label>
                <input className="rounded-lg ml-10 ring-2" type="text" name="title" placeholder="Enter a Title" value={title} onChange={onTitleChange} /><br />
                <label className="hover:text-gray-600 ml-12 " htmlFor="uname"><b>USERNAME</b></label>
                <input className="rounded-lg ml-10 mt-5 ring-2" type="text" name="uname" placeholder="Enter a username" value={username} onChange={onUsernameChange} /><br />
                <label className="hover:text-gray-600 ml-12 " htmlFor="pword"><b>PASSWORD</b></label>
                <input className="rounded-lg ml-10 mt-5 ring-2" type="text" name="pword" placeholder="Enter password" value={password} onChange={onPasswordChange} />
            </form>

            {
            /*
            
                <form className=" mt-14 mb-20">
                    <label className="hover:text-gray-600 ml-24 " for="title"><b>TITLE</b></label>
                    <input className="rounded-lg ml-10 ring-2" type="text" name="title" placeholder="Enter a Title" /><br />
                    <label className="hover:text-gray-600 ml-12 " for="uname"><b>USERNAME</b></label>
                    <input className="rounded-lg ml-10 mt-5 ring-2" type="text" name="uname" placeholder="Enter a username" /><br />
                    <label className="hover:text-gray-600 ml-12 " for="pword"><b>PASSWORD</b></label>
                    <input className="rounded-lg ml-10 mt-5 ring-2" type="password" name="pword" placeholder="Enter password" />
                </form>
            */}
            {/*
                <div className="justify-center mb-20">
                    <h1 className="ml-8 mb-5 text-gray-600"><b>CUSTOM TAGS</b></h1>
                    <form>
                        <label className="hover:text-gray-600 ml-28" for="url"><b>URL</b></label>
                        <input className="rounded-lg ml-10 mt-5 ring-2" type="text" name="url" placeholder="Enter a URL" /><br />
                        <label className="hover:text-gray-600 ml-28" for="pin"><b>PIN</b></label>
                        <input className="rounded-lg ml-10 mt-5 ring-2" type="text" name="pin" placeholder="Enter a PIN" />
                    </form>

                </div>*/}
            {/*
                      <button id="button" type="button"
                className="rounded-full pt-1 mt-7 ml-5 h-8 w-40 text-sm text-white flex  align-text-bottom transition-all duration-150 ease-linear rounded-xl shadow outline-none bg-gray-500 hover:bg-gray-600 hover:shadow-lg focus:outline-none justify-center shadow-2xl">
                <b>+ ADD NEW FIELD</b>

            </button>
            */}

            <button id="button" type="button" onClick={onSaveHandler}
                className="rounded-full pt-1 ml-5 mb-2 h-8 w-40 text-sm text-white flex
                absolute bottom-0 left-0 align-text-bottom transition-all duration-150 ease-linear rounded-xl shadow outline-none bg-gray-500 hover:bg-green-600 hover:shadow-lg focus:outline-none justify-center shadow-2xl">
                <b>SAVE</b>

            </button>
            <button id="button" type="button"
                className="rounded-full pt-1 mr-5 mb-2 h-8 w-40 text-sm text-white flex absolute bottom-0 right-0 align-text-bottom transition-all duration-150 ease-linear rounded-xl shadow outline-none bg-gray-500 hover:bg-red-600 hover:shadow-lg focus:outline-none justify-center shadow-2xl">
                <b>DELETE</b>

            </button>



        </section>
    );
}