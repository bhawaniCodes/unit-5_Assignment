import { INC_COUNT, DEC_COUNT, ADD_COUNT, SUB_COUNT, MUL_COUNT, DIV_COUNT } from "./actionTypes"

export const reducerFn = (state, { type, payload}) => {
    switch (type) {
        case INC_COUNT:
            return {
                ...state,
                counter: (+state.counter + payload).toFixed(2),
            };
        case DEC_COUNT:
            return {
                ...state,
                counter: (+state.counter - payload).toFixed(2),
            };
        case ADD_COUNT:
            return {
                ...state,
                counter: (+state.counter + payload)
            };
        case SUB_COUNT:
            return {
                ...state,
                counter: (+state.counter - payload)
            };
        case MUL_COUNT:
            return {
                ...state,
                counter: (+state.counter * payload)
            };
        case DIV_COUNT:
            return {
                ...state,
                counter: (+state.counter / payload).toFixed(2)
            };
        default: return {...state}
    }
}