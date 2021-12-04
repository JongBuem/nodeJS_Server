const express = require('express')
const app = express()


app.get('/',(req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'}); 
    res.end('My JB\n');
})

app.listen(8080,()=>{
    console.log("starting")
})