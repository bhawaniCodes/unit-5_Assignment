import React, { useState } from 'react'

export const Login = () => {
    const [loginData, setLoginData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({...loginData, [name]: value})
    }

    return (
        <div>
            <form action="">
                <input
                    type="text"
                    placeholder="username"
                    name="username"
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
