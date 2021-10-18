import React from "react";
import { useHistory } from "react-router";

export const Dashboard = () => {
    const history = useHistory();

    const handleLogout = () => {
        localStorage.setItem("authState", false);
        history.push("/login");
    };
    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
            <h1>Welcome To Dashboard</h1>
            <h2>Meetup App</h2>
        </div>
    );
};
