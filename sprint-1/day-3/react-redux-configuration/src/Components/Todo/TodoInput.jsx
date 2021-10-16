import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { getTodoFn, toggleTodo } from "../../redux/todoReducer/action";
import { AppContext } from '../../Context/AppContextProvider';

export const TodoInput = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const { all, setAll } = useContext(AppContext);

    const handleTodo = async() => {
        let resp = await axios.post("http://localhost:3001/todos", {
            status: false,
            title,
        });
        dispatch(getTodoFn());
        setAll(true)
    }

    // const getTodos = () => {
        // let resp = await axios.get("http://localhost:3001/todos");
        // let getTodoAction = getTodo(resp.data)
        // dispatch(getTodoAction);
        // dispatch(getTodoFn());
        
    // }

    useEffect(() => {
        dispatch(getTodoFn());
    },[])

    return (
        <div>
            <input
                type="text"
                placeholder="Enter Title" value={ title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={ handleTodo}>ADD</button>
        </div>
    );
}
