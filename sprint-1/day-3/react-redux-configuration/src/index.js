import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppContextProvider } from "./Context/AppContextProvider";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={ store}>
                <AppContextProvider>
                    <App />
                </AppContextProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
