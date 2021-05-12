import React from 'react';
import logo from '../../assets/logo.svg';

export default function Login() {
    return (
        <>
            <div className="h-screen flex items-center justify-items-cente space-x-9">
                { /* Logo Section */}
                <section className="w-1/2 flex-auto">
                    <img src={logo} className="m-auto" alt="" />
                    <h1 className="text-center text-3xl">Passdex</h1>
                </section>
                {/* Login Section */}
                <section className="w-1/2 flex-auto flex">
                    <div className="rounded-xl px-10 py-10 shadow-2xl ml-20">
                        <h2 className="text-center text-3xl py-4">Login</h2>
                        <form>
                            <input className="block" type="username" name="username" placeholder="username" />
                            <input className="block" type="password" name="password" placeholder="password" />
                            <input className="block mt-6 border-2" type="submit" value="login" />
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
}
