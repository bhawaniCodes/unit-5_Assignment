

import React from 'react'
import { Redirect, Route } from 'react-router'

export const PrivateRoute = ({ children, path }) => {
    const authState = JSON.parse(localStorage.getItem('authState'))
    
    if (authState) {
        return <Route path={path}>{children}</Route>;
    } else {
        return <Redirect to="/login" />;
    }
}
