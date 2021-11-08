const express = require('express');
const app = express();
const connect = require('../src/configs/db');
const { register, login } = require('./controllers/auth.controller');
app.use(express.json());
const userController = require('./controllers/user.controller')
const lectureController = require('./controllers/lecture.controller')
app.use('/users', userController)
app.use("/lectures", lectureController);
app.use('/users/signup', register)
app.use('/users/login', login)

app.listen(2222, async() => {
    await connect();
    console.log('Listening to port 2222');
})
