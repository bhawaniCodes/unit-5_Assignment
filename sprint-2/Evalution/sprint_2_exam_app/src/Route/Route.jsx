import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Login } from '../Components/Login';
import { Signup } from '../Components/Signup';

export const Route = () => {
    return (
        <div>
            <Switch>
                <Route path='/signup'>
                    <Signup/>
                </Route>
                <Route path='/login'>
                    <Login/>
                </Route>
            </Switch>
        </div>
    )
}
