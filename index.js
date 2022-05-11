const express = require('express');

const app = express();

app.use(()=>{
    console.ino('Hello Server!')
})

app.listen(4000)
