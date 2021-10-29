const express = require('express');
const app = express();
const connect = require('./config/db')
app.use(express.json());
const userController = require('./controller/user.controller');

app.use('/users', userController)

app.listen(2233, async() => {
    await connect();
    console.log('Listening to port  2233');
})
