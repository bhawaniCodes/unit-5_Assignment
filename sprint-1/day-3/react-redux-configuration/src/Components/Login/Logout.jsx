import React from 'react'
import { useHistory } from 'react-router'

export const Logout = () => {
    const history = useHistory();

    const handleLogout = () => {
        localStorage.setItem('token', JSON.stringify(''))
        localStorage.setItem('authState', false)
        history.push('/login');
    }

    return (
        <div>
            <button onClick={ handleLogout}>Logout</button>
        </div>
    )
}
