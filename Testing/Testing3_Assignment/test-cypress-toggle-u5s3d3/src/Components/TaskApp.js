import React, { Component, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
import { v4} from 'uuid'

export const TaskApp = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");

    const handleChange = (e) => {
        setTask(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { title: task, id:v4(), status: false}
        setTodos([...todos, payload])
        setCount(count+1)
    };

    const handleDelete = (id) => {
        const update = todos.filter((e) => e.id !== id && e)
        setTodos(update)
        setCount(count - 1);
    }

    return (
        <div className="container-fluid text-center">
            <header className="p-2">
                <h1 data-cy='count'>{ count}</h1>
                <h1>Tasks</h1>
                <TaskForm
                    value={task}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
            </header>
            <section className="mt-2">
                <TaskList todos={todos} handleDelete={handleDelete} />
            </section>
        </div>
    );
};
