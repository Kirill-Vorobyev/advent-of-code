const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 31313;

const sky = require('./messageInTheSky');

app.use(express.static(__dirname+'/client'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/client/index.html');
});

app.get('/positions',(req,res)=>{
    res.json(sky.getData());
});

http.listen(port,() => {
    console.log(`Server listening on port ${port}`);
});
