import { GET_LOGIN_STATE } from "./actionType";


export const getLoginState = (curState) => {
    return { type: GET_LOGIN_STATE, payload: curState};
}