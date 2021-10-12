import React, { createContext, useReducer } from 'react'
import { todoReducer } from '../useReducerStore/todoReducer';

export const AppContext = createContext();


const initState = {
    todos: {
        isRequest: false,
        isFailure: false,
        data: [],
    },
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initState);

    return (
        <div>
            <AppContext.Provider value={{ state, dispatch }}>
                {children}
            </AppContext.Provider>
        </div>
    );
}
