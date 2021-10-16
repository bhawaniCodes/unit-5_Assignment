import { GET_LOGIN_STATE } from "./actionType"

const initState = {
    authState: false
}

export const authReducer = (state, { type, payload}) => {
    switch (type) {
        case GET_LOGIN_STATE:
            return {
                ...state,
                authState: payload
            }
        default: return { ...state}
    }
}