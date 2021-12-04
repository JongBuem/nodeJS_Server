const express = require('express')
const app = express()


app.get('/',(req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'}); 
    res.end('My JB\n');
})

const port = process.env.PORT || 1337;
app.listen(port);
