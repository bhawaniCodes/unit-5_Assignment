
import React, { createContext, useState } from 'react'

export const AppContext = createContext();

export const AppContextProvider = ({ children, store }) => {
    const [state, setState] = useState(0);
    const { getState, dispatch } = store;
    const value = { getState, dispatch };
    const forceUpdate = () => setState(state + 1);
    store.subscribe(forceUpdate);

    return (
        <div>
            <AppContext.Provider value={ value}>{children}</AppContext.Provider>
        </div>
    )
}
