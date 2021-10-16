import axios from 'axios';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router'
import { getTodoFn, toggleTodo } from '../redux/action';
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from '../Context/AppContextProvider';

export const TodoItem = () => {
    const { id } = useParams()
    const todos = useSelector((state) => state.todos, shallowEqual);
    const total = useSelector((state) => state.total[0]);
    const { all, setAll } = useContext(AppContext);


    const history = useHistory();

    const dispatch = useDispatch();

    const handleToggle = async(stat) => {
        dispatch(toggleTodo(+id))
        let resp = await axios.patch(`http://localhost:3001/todos/${+id}`, {
            status: !stat
        });
        console.log('resp132:', resp.data)
        dispatch(getTodoFn());
    }
    const handleEdit = async(titl) => {
        history.push(`/todo/${+id}/edit`)
    }
    
    const gotoTodo = async() => {
        setAll(true);
        return history.push("/");
    }
    
    useEffect(() => {
        dispatch(getTodoFn());
    }, []);



    return (
        <div>
            <div>Total : {total}</div>
            {todos.map((e) =>
                e.id === +id ? (
                    <div key={id}>
                        <p>Title - {e.title}</p>
                        <p>Status - {e.status ? "Completed" : "Panding"}</p>
                        <button onClick={() => handleToggle(e.status)}>
                            ChangeStatus
                        </button>
                        <button onClick={() => handleEdit(e.title)}>
                            Edit
                        </button>
                        <br />
                        <button onClick={gotoTodo}>Go To Home</button>
                    </div>
                ) : null
            )}
        </div>
    );
}
