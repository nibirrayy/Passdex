import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';


import createCheckHomeDir from '../../lib/startup.js'
import Auth from "../../lib/auth.js";

const login = (props, username, password) => {
    const isAuth = Auth.login(username, password);
    if (isAuth) {
        props.history.push('/main')
    }
}


export default function Login(props) {

    useEffect(() => {
        createCheckHomeDir()
    }, [])

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    //The handlers of usernaem and password states are below
    const usernameHandler = (e) => {
        setUsername(e.target.value)
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

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
                            <input className="block" type="username" name="username" placeholder="username" value={username} onChange={usernameHandler} />
                            <input className="block" type="password" name="password" placeholder="password" value={password} onChange={passwordHandler} />
                            <input className="block mt-6 border-2" type="submit" value="login" onClick={() => { login(props, username, password) }} />
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
}
