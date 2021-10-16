import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { TodoItem } from '../Components/TodoItem';
import { TodoInput } from "../Components/TodoInput";
import { TodoList } from "../Components/TodoList";
import { TodoItemEdit } from '../Components/TodoItemEdit';

export const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <TodoInput />
                    <TodoList />
                </Route>
                <Route exact path="/todo/:id">
                    <TodoItem />
                </Route>
                <Route path="/todo/:id/edit">
                    <TodoItemEdit />
                </Route>
            </Switch>
        </div>
    );
}
