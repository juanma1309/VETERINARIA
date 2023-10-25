const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use('/', require('./router'));

app.listen(5002,()=>{
    console.log('server corriendo en http://localhost:5002')
})