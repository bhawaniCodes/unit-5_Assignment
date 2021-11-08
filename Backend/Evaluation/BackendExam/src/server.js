const express = require('express');
const app = express();
app.use(express.json());

app.listen(2222, () => {
    console.log('Listening to port 2222');
})
