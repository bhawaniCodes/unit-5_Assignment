import { todoReducer } from "./todoReducer/todoReducer";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { authReducer } from "./authReducer/authReducer";
import logger from 'redux-logger'

const reducer = combineReducers({
    todos: todoReducer,
    authState: authReducer
})

export const store = createStore(
    reducer,
    compose(
        applyMiddleware(ReduxThunk,logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
