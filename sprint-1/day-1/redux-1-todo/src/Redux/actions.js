import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "./actionTypes"

  
  export const addTask = (payload) => {
      return {type: ADD_TASK, payload}
}
  
export const deleteTask = (payload) => {
    return { type: DELETE_TASK, payload };
};

export const editTask = (payload) => {
    return {type: TOGGLE_TASK, payload}
}