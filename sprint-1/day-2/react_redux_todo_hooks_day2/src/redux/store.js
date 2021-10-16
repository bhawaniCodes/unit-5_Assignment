import { todoReducer } from "./todoReducer";
import { applyMiddleware, compose, createStore } from "redux";
import ReduxThunk from "redux-thunk";


export const store = createStore(todoReducer,
    compose(
        applyMiddleware(ReduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
))
