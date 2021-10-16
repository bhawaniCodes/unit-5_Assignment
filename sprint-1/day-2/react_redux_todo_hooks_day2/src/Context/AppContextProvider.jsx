import React, { createContext, useState } from 'react'

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [all, setAll] = useState(true);
    const value = {all, setAll}

    return (
        <div>
            <AppContext.Provider value={ value}>{ children}</AppContext.Provider>
        </div>
    )
}
