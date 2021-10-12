import React, { useState } from 'react'
import { UseMergeState } from '../customHook/UseMergeStateHook';

const initState = {
    username: "",
    email: "",
    password: "",
};

export const Form = () => {
    const { state, setState} = UseMergeState(initState);

    const handleChange = (e) => {
        
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    return (
        <div>
            <form action="">
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    onChange={(e) => handleChange(e)}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    onChange={(e) => handleChange(e)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => handleChange(e)}
                />
                <input type="submit" />
            </form>
            <div>
                Username: {state.username}
                <br />
                Password: {state.password}
                <br />
                Email: {state.email}
                <br />
            </div>
        </div>
    );
}
