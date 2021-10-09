import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "./actionTypes"

const initState = {
    todos: []
}

export const taskReducer = (state=initState, { type, payload }) => {
    switch (type) {
        case ADD_TASK: 
            return { ...state, todos: [...state.todos, payload], }
        case TOGGLE_TASK:
            return {
                ...state,
                todos: [
                    ...state.todos.map((item) =>
                        item.id === payload ? ({ ...item, status: !item.status }) : item
                    ),
                ],
            };
        case DELETE_TASK:
            return {
                ...state,
                todos:[...state.todos.filter(el=>el.id !== payload)]
            }
        default: return { ...state }
    }
}