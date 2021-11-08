const express = require('express');
const app = express();
const connect = require('./configs/db');
const { register, login } = require('./controllers/auth.controller');
app.use(express.json());
const userController = require('./controllers/user.controller')
const lectureController = require('./controllers/lecture.controller')
app.use('/users', userController)
app.use("/lectures", lectureController);
app.post('/users/signup', register)
app.post('/users/login', login)

app.listen(2222, async() => {
    await connect();
    console.log('Listening to port 2222');
})
