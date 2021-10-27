const express = require('express');
const app = express();
const connect = require('./config/db')
app.use(express.json());
const userController = require('./controllers/user.controller')
app.use('/users', userController);

const start = async() => {
    await connect()
    app.listen(5555, () => {
        console.log('listening to port 5555')
    })
}

module.exports = start;