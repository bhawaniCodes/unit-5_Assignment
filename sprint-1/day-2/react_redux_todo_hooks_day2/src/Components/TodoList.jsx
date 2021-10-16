import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, getTodoComFn, getTodoFn } from "../redux/action"
import { Link } from 'react-router-dom';
import axios from "axios";
import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContextProvider";

const styleColor = {
    background: 'gray',
    color: '#ffffff'
}


export const TodoList = () => {
    const todos = useSelector((state) => state.todos)
    const total = useSelector((state) => state.total);
    console.log('total:', total)
    console.log('todos:', todos)
    const dispatch = useDispatch();
    const {all, setAll } = useContext(AppContext);


    const handleDelete = async (idd) => {
        
        dispatch(deleteTodo(idd))
        let resp = await axios.delete(`http://localhost:3001/todos/${idd}`);
        dispatch(getTodoFn());
        
    }

    const displayCompletedTask = () => {
        dispatch(getTodoComFn());
        setAll(false);
    }
    const displayTotalTask = () => {
        dispatch(getTodoFn());
        setAll(true);
    };

    return (
        <div>
            <button style={all ? styleColor : null} onClick={displayTotalTask}>
                Total
            </button>
            <button
                style={all ? null : styleColor}
                onClick={displayCompletedTask}
            >
                Completed
            </button>
            <div>Total : {total}</div>
            {todos.map((item) => (
                <div key={item.id}>
                    <Link to={`/todo/${item.id}`}>
                        {item.title}- {item.status ? "True" : "False"}
                    </Link>
                    <button onClick={() => handleDelete(item.id)}>
                        Remove
                    </button>
                    {/* <button onClick={()=>deleteTodo(item.id) }>Remove</button> */}
                </div>
            ))}
        </div>
    );
}