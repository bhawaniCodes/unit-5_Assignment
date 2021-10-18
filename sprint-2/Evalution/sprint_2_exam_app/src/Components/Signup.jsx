import React, { useState } from "react";

const initData = {
    name: "",
    email: "",
    password: "",
    age: "",
    location: "",
    technology : false,
    food : false,
    language : false,
    movies : false,
    drama:false,
};

export const Signup = () => {
    const [formData, setFormData] = useState(initData);

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? value : value,
        });
    };
    const handleSubmit = async(e) => {
        e.preventDefault();
        const resp = await axios .post('http://localhost:3001/users', formData);
        // setFormData()
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    onChange={handleChange}
                />
                <br />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                />
                <br />
                <input
                    type="number"
                    placeholder="age"
                    name="age"
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    placeholder="location"
                    name="location"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="">technology</label>
                <input
                    type="checkbox"
                    id="technology"
                    value="true"
                    name="technology"
                    onChange={handleChange}
                />
                <br />

                <label htmlFor="">drama</label>
                <input
                    type="checkbox"
                    id="drama"
                    value="true"
                    name="drama"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="">food</label>
                <input
                    type="checkbox"
                    id="food"
                    value="true"
                    name="food"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="">language</label>
                <input
                    type="checkbox"
                    id="language"
                    value="true"
                    name="language"
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="">movies</label>
                <input
                    type="checkbox"
                    id="movies"
                    value="true"
                    name="movies"
                    onChange={handleChange}
                />
                <br />

                <input type="submit" />
            </form>
        </div>
    );
};

