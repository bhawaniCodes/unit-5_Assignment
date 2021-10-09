import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../Redux/actions";
import { Modal } from "./Modal";

export const TodoList = () => {
    const [modalState, setModalState] = useState(false);
    const [taskId, setTaskId] = useState("");
    const todos = useSelector((state) => state.todos);
    console.log("todos:", todos);
    const dispatch = useDispatch();

    const handleDelete = () => {};
    const editToggle = (idd) => {
        setTaskId(idd);
        setModalState(!modalState);
    };
    return (
        <>
            {todos.map((item) => (
                <>
                    <div key={item.id}>
                        <div>
                            {item.title}- {item.status ? "True" : "False"}
                        </div>
                        <button onClick={()=>dispatch(deleteTask(item.id))}>
                            Delete
                        </button>
                        <button onClick={() => editToggle(item.id)}>
                            Toggle
                        </button>
                    </div>
                </>
            ))}
            {modalState ? <Modal id={taskId}></Modal> : null}
        </>
    );
};
