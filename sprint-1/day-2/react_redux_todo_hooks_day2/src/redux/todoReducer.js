import { ADD_TODO, DELETE_TODO, EDIT_COMPLETED, EDIT_TODO, EDIT_TOTAL, GET_TODO, TOGGLE_TODO } from "./actionTypes"

const initState = {
    todos: [],
    total: [0],
    completed: [0]
}

export const todoReducer = (state = initState, { type, payload}) => {
    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos],
            };
        // case EDIT_TOTAL:
        //     console.log('state.total ',state.total)
        //     return {
        //         ...state,
        //         total: [+state.total+1]
        //     };
        case GET_TODO:
            return {
                ...state,
                todos: [...payload],
                total: [payload.length > 0 ? payload.length : 0],
            };
        case DELETE_TODO:
            console.log("id", payload);
            return {
                ...state,
                todos: [...state.todos.filter((item) => item.id !== payload)],
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos.map((item) =>
                        item.id === payload
                            ? { ...item, status: !item.status }
                            : item
                    ),
                ],
            };
        case EDIT_TODO:
            return {
                ...state,
                todos: [...state.todos.map((e) => e.id === payload.idd ? {...e, title: payload.title} : e)]
            };
        default:
            return { ...state };
    }
}