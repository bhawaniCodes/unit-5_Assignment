import axios from "axios"
import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    GET_TODO,
    TOGGLE_TODO,
    EDIT_COMPLETED,
    EDIT_TOTAL
} from "./actionTypes";


export const addTodo = () => { 
    return {type: ADD_TODO}
}
export const getTodo = (payload) => { 
    return {type: GET_TODO, payload}
}

export const toggleTodo = (id) => {
    return {type: TOGGLE_TODO, payload:id}
}
export const deleteTodo = (id) => {
    return { type: DELETE_TODO, payload: id };
}
export const editTodo = (id) => {
    return { type: EDIT_TODO, payload: id };
}

export const getTodoFn = () => async(dispatch) =>{
    try {
        let resp = await axios.get("http://localhost:3001/todos");
        dispatch(getTodo(resp.data));
    } catch (err) {
        console.log(err.message)
    }
}

export const getTodoComFn = () => async (dispatch) => {
    try {
        let resp = await axios.get("http://localhost:3001/todos");
        console.log('respCom:', resp.data)
        let newData = resp.data.filter((e)=> e.status === true)
        console.log("newData:", newData);
        dispatch(getTodo(newData));
    } catch (err) {
        console.log(err.message);
    }
};