import React from "react";

const TaskItem = ({ todo, handleDelete }) => (
    <>
        <div>
            <p data-cy='todo'>{todo.title}</p>
            <button onClick={() => handleDelete(todo.id)}>Remove</button>
        </div>
    </>
);

export const TaskList = ({ todos, handleDelete }) => (
    <>
        <ul className="task-list">
            {todos.map((todo) => (
                <TaskItem
                    key={todo.id}
                    todo={todo}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    </>
);
