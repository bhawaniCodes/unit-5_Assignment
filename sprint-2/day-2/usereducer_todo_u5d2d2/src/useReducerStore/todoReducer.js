import { ADD_TODO, ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, GET_TODO } from "./actionTypes";

export const todoReducer = (state, { type, payload }) => {
    switch (type) {
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                todos: {...state.todos, isRequest: false},
            };
        case GET_TODO:
            return {
                ...state,
                todos: {...state.todos, isRequest: false, data: [...payload]},
            };
        case ADD_TODO_FAILURE:
            return {
                ...state,
                todos: { ...state.todos, isRequest: false, isFailure: true},
            };
        case ADD_TODO_REQUEST:
            return {
                ...state,
                todos: {...state.todos, isRequest: true, isFailure: false}
                
            };
        default:
            return { ...state };
    }
};
