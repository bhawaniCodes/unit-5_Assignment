import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginState } from '../../redux/authReducer/action';

let initValue = {
    email: "",
    password: "",
};

export const Login = () => {
    const [data, setData] = useState(initValue);
    // const [authState, setAuthState] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('hello')
        let resp = await axios.post("https://reqres.in/api/login", data);
        localStorage.setItem("token", JSON.stringify(resp.data.token));
        localStorage.setItem("authState", true)
        history.push('/');
    }

    useEffect(() => {
        let authStatee = JSON.parse(localStorage.getItem("authState"));
        dispatch(getLoginState(authStatee));
        // setAuthState(authStatee)
    },[])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({...data, [name]: value})
    }

    return (
        <div>
            <form onSubmit={ handleSubmit}>
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
                <input type="submit" value='Submit' />
            </form>
        </div>
    );
}
