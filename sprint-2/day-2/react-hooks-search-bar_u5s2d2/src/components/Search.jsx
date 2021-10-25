import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import axios from "axios";
import "./Search.css";

export const Search = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [isDisplay, setIsDisplay] = useState(false);

    const handleTrottle = async (e) => {
        setSearch(e.target.value);
        setTimeout(async () => {
            try {
                let resp = await axios.get(
                    `http://localhost:3001/city?${search}`
                );
                console.log(resp.data);
                setData(resp.data);
                setIsDisplay(true);
            } catch (error) {
                console.log(error.message);
            }
        }, [2000]);
    };

    // const handleClick = (e) => {

    // }

    return (
        <div>
            <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
                type="text"
                placeholder="Search type"
                onChange={handleTrottle}
            />
            <div className={isDisplay ? "show" : "hide"}>
                {data.map((el) => (
                    <div className="result">{el.country}</div>
                ))}
            </div>
        </div>
    );
};
