import axios from 'axios';
import React, { useState } from 'react'

export const Login = () => {
    const [loginData, setLoginData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({...loginData, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resp = await axios.get("http://localhost:3001/users");
        resp.data.map((item) =>
            if(item.email === loginData.email && item.password === loginData.password) {
            
            }
        )
    };

    return (
        <div>
            <h2>Login</h2>
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
                <input type="submit" />
            </form>
        </div>
    );
}
