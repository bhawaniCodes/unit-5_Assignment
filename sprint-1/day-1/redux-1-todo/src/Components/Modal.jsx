import React, { useState } from 'react'
import './modal.css'
import { useDispatch, useSelector } from "react-redux";
import { editTask } from '../Redux/actions';

export const Modal = ({ id }) => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch()
    const [view, setView] = useState(true);
    

    return view ? (
        <div className="outerDivModal">
            <div className="innerDivModal">
                {todos.map((item) => (
                    <div key={item.id}>
                        {item.id === id ? (
                            <div key={item.id}>
                                {item.status ? (
                                    <div>
                                        {item.title} -{" "}
                                        {item.status ? "True" : "False"}
                                        <button
                                            onClick={() =>
                                                dispatch(editTask(item.id))
                                            }
                                        >
                                            TOGGLE
                                        </button>
                                    </div>
                                ) : (
                                    <div>
                                        {item.title} -{" "}
                                        {item.status ? "True" : "False"}
                                        <button
                                            onClick={() =>
                                                dispatch(editTask(item.id))
                                            }
                                        >
                                            TOGGLE
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : null}
                    </div>
                ))}
            <button onClick={ ()=>setView(!view)}>X</button>
            </div>
        </div>
    ): null
}
