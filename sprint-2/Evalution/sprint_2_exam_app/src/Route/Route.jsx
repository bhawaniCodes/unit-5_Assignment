import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Dashboard } from '../Components/Dashboard';
import { Login } from '../Components/Login';
import Navbar from '../Components/Navbar';
import { Signup } from '../Components/Signup';
import { PrivateRoute } from './PrivateRoute';

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
                <PrivateRoute path="/dashboard">
                    <Navbar />
                    <Dashboard />
                </PrivateRoute>
            </Switch>
        </div>
    );
}
