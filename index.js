require('dotenv').config();
const express = require('express');
const app = express();


app.get('/' , (req , res) => {
    res.send("Hello world");
})

app.get('/loing' , (req , res) => {
    res.send("<h2>Login</h2>");
})


app.listen(process.env.PORT , () => {
    console.log('server is running');
})