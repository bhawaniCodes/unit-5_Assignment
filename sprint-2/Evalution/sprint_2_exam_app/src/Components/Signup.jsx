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


    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? value : value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // const resp = await axios.post('')
        
    }


    return (
        <div>
            <form action="" onSubmit={ handleSubmit}>
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    onChange={handleChange}
                /><br />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                /><br />
                <input
                    type="number"
                    placeholder="age"
                    name="age"
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    placeholder="location"
                    name="location"
                    onChange={handleChange}
                /><br />
                <label htmlFor="">technology</label>
                <input type="checkbox" id='technology' value='technology' name="Interest" onChange={handleChange} />
                <br />
                <label htmlFor="">drama</label>
                <input type="checkbox" id='drama' value='drama' name="Interest" onChange={handleChange} />
                <br />
                <label htmlFor="">food</label>
                <input type="checkbox" id='food' value='food' name="Interest" onChange={handleChange} />
                <br />
                <label htmlFor="">language</label>
                <input type="checkbox" id='language' value='language' name="Interest" onChange={handleChange} />
                <br />
                <label htmlFor="">movies</label>
                <input type="checkbox" id='movies' value='movies' name="Interest" onChange={handleChange} />
                <br />


                <input type="submit" />
            </form>
        </div>
    );
}technology, food, language learning, movies, culture, art, drama etc


