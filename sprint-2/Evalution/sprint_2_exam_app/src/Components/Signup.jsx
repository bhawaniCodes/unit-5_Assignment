import React, { useState } from 'react'

const initData = {
    name: "",
    email: "",
    password: "",
    age:"",
    location:"",
    interest:[]
}

export const Signup = () => {
    const [formData, setFormData] = useState(initData)

    return (
        <div>
            <form action="">
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    onChange={handleChange}
                />
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
                <input
                    type="text"
                    placeholder="age"
                    name="age"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="location"
                    name="location"
                    onChange={handleChange}
                />
                <label htmlFor=""></label>
                <input type="checkbox" name="" onChange={handleChange} />
            </form>
        </div>
    );
}technology, food, language learning, movies, culture, art, drama etc


