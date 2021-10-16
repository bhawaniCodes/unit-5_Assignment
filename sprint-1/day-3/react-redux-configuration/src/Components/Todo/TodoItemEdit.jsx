import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
    editTodo,
    getTodoFn,
    toggleTodo,
} from "../../redux/todoReducer/action";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContextProvider";

export const TodoItemEdit = () => {
    const [title, setTitle] = useState("");
    const { id } = useParams();
    const idd = +id;

    const todos = useSelector((state) => state.todos.todos, shallowEqual);
    const total = useSelector((state) => state.todos.total[0]);
    const { all, setAll } = useContext(AppContext);

    const history = useHistory();

    const dispatch = useDispatch();

    const handleToggle = async (stat) => {
        dispatch(toggleTodo(idd));
        let resp = await axios.patch(`http://localhost:3001/todos/${idd}`, {
            status: !stat,
        });
        console.log("resp132:", resp.data);
        dispatch(getTodoFn());
    };

    const handleTitle = async () => {
        dispatch(editTodo({idd, title}))
        await axios.patch(`http://localhost:3001/todos/${idd}`, {
            title
        })
        dispatch(getTodoFn());
    }

        const gotoTodo = async () => {
            setAll(true);
            return history.push("/");
        };
    


    useEffect(() => {
        dispatch(getTodoFn());
    }, []);

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Change your title here"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button onClick={handleTitle}>Save Changes</button>{" "}
            </div>
            <div>Total : {total}</div>
            {todos.map((e) =>
                e.id === idd ? (
                    <div key={idd}>
                        <p>Title - {e.title}</p>
                        <p>Status - {e.status ? "Completed" : "Panding"}</p>
                        <button onClick={() => handleToggle(e.status)}>
                            ChangeStatus
                        </button>
                    </div>
                ) : null
            )}
            <button onClick={gotoTodo}>Go To Home</button>
        </div>
    );
};
