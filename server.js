const express = require('express');
const app = express();
const path = require('path');
const hostname = '127.0.0.1' ;
const port = 3000 ;

app.use(express.static('Server'));

app.get('/' , (req,res)=>{
    res.sendFile(path.join(__dirname , 'index.html'))

});


app.listen(port , hostname , ()=>{
    console.log(`Successfully Server Started On http://${hostname}:${port} `);
});


