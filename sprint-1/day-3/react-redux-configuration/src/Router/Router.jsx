import React from "react";
import { Switch, Route } from "react-router-dom";
import { TodoItem } from "../Components/Todo/TodoItem";
import { TodoInput } from "../Components/Todo/TodoInput";
import { TodoList } from "../Components/Todo/TodoList";
import { TodoItemEdit } from "../Components/Todo/TodoItemEdit";
import { Login } from "../Components/Login/Login";
import { Logout } from "../Components/Login/Logout";
import { PrivateRoute } from "./PrivateRoute";

export const Router = () => {
    return (
        <div>
            <Switch>
                <PrivateRoute exact path="/">
                    <Logout/>
                    <TodoInput />
                    <TodoList />
                </PrivateRoute>
                <PrivateRoute exact path="/todo/:id">
                    <TodoItem />
                </PrivateRoute>
                <PrivateRoute path="/todo/:id/edit">
                    <TodoItemEdit />
                </PrivateRoute>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </div>
    );
};
