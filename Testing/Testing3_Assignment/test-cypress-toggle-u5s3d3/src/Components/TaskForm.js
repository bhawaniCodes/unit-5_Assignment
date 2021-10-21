import React from "react";

export const TaskForm = ({ onChange, onSubmit, value }) => (
    <form onSubmit={onSubmit}>
        <input
            type="text"
            autoFocus
            className="p-2 rounded border task-input"
            placeholder="Add something?"
            value={value}
            onChange={onChange}
    />
        <input type="submit" />
    </form>
);


