import React, { useState } from 'react'

export const Login = () => {
    const [loginData, setLoginData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({...loginData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                />
            </form>
        </div>
    );
}
