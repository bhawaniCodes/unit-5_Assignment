import { INC_COUNT, DEC_COUNT, ADD_COUNT, SUB_COUNT, MUL_COUNT, DIV_COUNT } from "./actionTypes"


export const incCount = (data) => {
    return {type: INC_COUNT, payload: data}
}
export const decCount = (data) => {
    return {type: DEC_COUNT, payload: data}
}
export const addCount = (data) => {
    return {type: ADD_COUNT, payload: data}
}
export const subCount = (data) => {
    return {type: SUB_COUNT, payload: data}
}
export const mulCount = (data) => {
    return {type: MUL_COUNT, payload: data}
}
export const divCount = (data) => {
    return {type: DIV_COUNT, payload: data}
}