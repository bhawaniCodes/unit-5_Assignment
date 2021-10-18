import React from 'react'

export const Signup = () => {
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
                <div>
                    <input
                        type="checkbox"
                        id="coding"
                        name="interest"
                        value="coding"
                        checked
                    />
                    <label htmlFor=""></label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="music"
                        name="interest"
                        value="music"
                    />
                    <label htmlFor=""></label>
                </div>
            </form>
        </div>
    );
}


