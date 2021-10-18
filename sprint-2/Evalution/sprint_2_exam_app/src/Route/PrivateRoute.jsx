

import React from 'react'
import { Redirect, Route } from 'react-router'

export const PrivateRoute = ({ children, path}) => {
    
    if ("true") {
        return <Route path={path}>{children}</Route>
    } else {
        return <Redirect to='/login' />
    }
}
