import React, { useContext, useEffect, useReducer, useState } from 'react'
import { addTodo, addTodoFailure, addTodoRequest, addTodoSuccess, getTodos } from '../useReducerStore/action';
import axios from 'axios';
import { todoReducer } from '../useReducerStore/todoReducer';
import { AppContext } from '../Context/AppProvider';


export const TodoInput = () => {
    const [ title, setTitle ] = useState('');
    const {state, dispatch } = useContext(AppContext);


   async function handleAddTodo(){
        // dispatch(addTodo(setTitle));
        try {
            dispatch(addTodoRequest())
            const resp = await axios.post("http://localhost:3001/todos", {
                status: false,
                title,
            });
            console.log(resp.data)
            dispatch(addTodoSuccess())
            getAllTodos();
        } catch(err) {
            dispatch(addTodoFailure());
        }  
    }

    const getAllTodos = async() => {
        const resp = await axios.get("http://localhost:3001/todos")
        console.log(resp.data);
        dispatch(getTodos(resp.data));
    }

    useEffect(() => {
        getAllTodos()
    },[])


    return (
        <div>
            <input
                type="text"
                placeholder="Add Title"
                onChange={(e) =>  setTitle(e.target.value)}
            />
            <button onClick={handleAddTodo}>ADD</button>

            <div>
                {state.todos.data.map((e) =>
                    <div key={e.id}>{ e.title}</div>
                )}
            </div>
        </div>
    );
}
