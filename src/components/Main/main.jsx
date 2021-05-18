import React from 'react';

import Vault from './vault.jsx'

export default function Main() {
    return (
        <>
            <main className="h-screen w-screen flex flex-wrap">

                <Vault />

                <section className="relative w-2/12 bg-gray-800 text-gray-100 flex flex-col shadow-2xl">

                    <h1
                        className="flex mt-3 mb-3 text-center text-2xl font-bold text-blue-200 justify-center hover:text-white shadow-2xl">
                        Category</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4 shadow-2xl" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                            clip-rule="evenodd" />
                    </svg>
                    <div className="flex py-3 px-8 bg-gray-800 hover:bg-gray-700">EMAIL</div>
                    <div className="flex py-3 px-8 bg-gray-800 hover:bg-gray-700">EDUCATION</div>
                    <div className="flex py-3 px-8 bg-gray-800 hover:bg-gray-700">FAMILY</div>
                    <div className="flex py-3 px-8 bg-gray-800 hover:bg-gray-700">ENTERTAINMENT</div>
                    <button id="button" type="button"
                        className="rounded-full pt-1 mr-auto ml-auto mb-2 h-8 w-32 text-sm text-white flex absolute inset-x-0 bottom-0 align-text-bottom transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-gray-500 hover:bg-gray-600 hover:shadow-lg focus:outline-none justify-center">
                        <b>+ NEW GROUP</b>

                    </button>

                </section>

                <section className="relative w-3/12 bg-gray-900 text-gray-100 shadow-2xl">

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
                    <div className="mt-3 py-3 px-8 bg-gray-900 hover:bg-gray-700">GMAIL</div>
                    <div className="py-3 px-8 bg-gray-900 hover:bg-gray-700">HOTSTAR</div>
                    <div className="py-3 px-8 bg-gray-900 hover:bg-gray-700">NETFLIX</div>
                    <button id="button" type="button"
                        className="rounded-full pt-1 mr-auto ml-auto mb-2 h-8 w-40 text-sm text-white flex absolute inset-x-0 bottom-0 align-text-bottom transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-gray-500 hover:bg-gray-600 hover:shadow-lg focus:outline-none justify-center shadow-2xl">
                        <b>+ ADD ENTRY</b>

                    </button>
                </section>

                <section
                    className="relative w-4/12 flex-1 bg-gradient-to-r via-white from-gray-100 to-gray-100 bg-opacity-80 shadow-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="text-blue-500 hover:text-gray-600 mt-4 mr-auto ml-auto h-12 w-12 shadow-2xl" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <form className=" mt-14 mb-20">
                        <label className="hover:text-gray-600 ml-24 " for="title"><b>TITLE</b></label>
                        <input className="rounded-lg ml-10 ring-2" type="text" name="title" placeholder="Enter a Title" /><br />
                        <label className="hover:text-gray-600 ml-12 " for="uname"><b>USERNAME</b></label>
                        <input className="rounded-lg ml-10 mt-5 ring-2" type="text" name="uname" placeholder="Enter a username" /><br />
                        <label className="hover:text-gray-600 ml-12 " for="pword"><b>PASSWORD</b></label>
                        <input className="rounded-lg ml-10 mt-5 ring-2" type="password" name="pword" placeholder="Enter password" />
                    </form>

                    <div className="justify-center mb-20">
                        <h1 className="ml-8 mb-5 text-gray-600"><b>CUSTOM TAGS</b></h1>
                        <form>
                            <label className="hover:text-gray-600 ml-28" for="url"><b>URL</b></label>
                            <input className="rounded-lg ml-10 mt-5 ring-2" type="text" name="url" placeholder="Enter a URL" /><br />
                            <label className="hover:text-gray-600 ml-28" for="pin"><b>PIN</b></label>
                            <input className="rounded-lg ml-10 mt-5 ring-2" type="text" name="pin" placeholder="Enter a PIN" />
                        </form>

                    </div>
                    <button id="button" type="button"
                        className="rounded-full pt-1 mt-7 ml-5 h-8 w-40 text-sm text-white flex  align-text-bottom transition-all duration-150 ease-linear rounded-xl shadow outline-none bg-gray-500 hover:bg-gray-600 hover:shadow-lg focus:outline-none justify-center shadow-2xl">
                        <b>+ ADD NEW FIELD</b>

                    </button>
                    <button id="button" type="button"
                        className="rounded-full pt-1 ml-5 mb-2 h-8 w-40 text-sm text-white flex
                absolute bottom-0 left-0 align-text-bottom transition-all duration-150 ease-linear rounded-xl shadow outline-none bg-gray-500 hover:bg-green-600 hover:shadow-lg focus:outline-none justify-center shadow-2xl">
                        <b>SAVE</b>

                    </button>
                    <button id="button" type="button"
                        className="rounded-full pt-1 mr-5 mb-2 h-8 w-40 text-sm text-white flex absolute bottom-0 right-0 align-text-bottom transition-all duration-150 ease-linear rounded-xl shadow outline-none bg-gray-500 hover:bg-red-600 hover:shadow-lg focus:outline-none justify-center shadow-2xl">
                        <b>DELETE</b>

                    </button>



                </section>

            </main>
        </>
    );
}