const express = require('express');
const app = express();
const connect = require('../src/configs/db')
app.use(express.json());
const userController = require('./controllers/user.controller')
app.use('/users', userController)

app.listen(2222, async() => {
    await connect();
    console.log('Listening to port 2222');
})
