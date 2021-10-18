import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Login } from '../Components/Login';
import Navbar from '../Components/Navbar';
import { Signup } from '../Components/Signup';

export const RouteAll = () => {
    return (
        <div>
            <Switch>
                <Route path="/signup">
                    <Navbar />
                    <Signup />
                </Route>
                <Route path="/login">
                    <Navbar />
                    <Login />
                </Route>
            </Switch>
        </div>
    );
}
