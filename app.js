const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.listen(5000,()=>{
    console.log('server corriendo en http://localhost:5000')
})