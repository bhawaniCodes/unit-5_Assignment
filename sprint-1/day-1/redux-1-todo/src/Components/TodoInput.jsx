import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../Redux/actions';
import { v4 as uuid } from 'uuid';

export const TodoInput = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const addTodo = () => {
        let payload = {id: uuid(), status: false, title}
        dispatch(addTask(payload));
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter Title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={ addTodo}>ADD</button>
        </div>
    );
}
