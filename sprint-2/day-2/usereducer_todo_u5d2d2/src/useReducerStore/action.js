import {
    ADD_TODO_FAILURE,
    ADD_TODO_REQUEST,
    ADD_TODO_SUCCESS,
    GET_TODO,
} from "./actionTypes";

export const addTodoSuccess = () => {
    return { type: ADD_TODO_SUCCESS };
 }
export const addTodoFailure = () => {
    return { type: ADD_TODO_FAILURE };
 }
export const addTodoRequest = () => {
    return { type: ADD_TODO_REQUEST };
 }
export const getTodos = (payload) => {
    return { type: GET_TODO, payload };
 }