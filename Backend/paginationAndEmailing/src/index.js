require("dotenv").config();
const express = require("express");
const app = express();
const connect = require("./config/db");

app.use(express.json());

const userController = require("./controllers/user.controller");
app.use("/users", userController);

app.listen(process.env.PORT, async () => {
    await connect();
    console.log("Running on server 2233");
});
