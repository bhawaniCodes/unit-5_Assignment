const express = require('express');
const app = express();
const connect = require('../src/configs/db')
app.use(express.json());

app.listen(2222, async() => {
    await connect();
    console.log('Listening to port 2222');
})
