const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

// app.set('port',process.env.PORT || 5005);
app.use('/', require('./router'));

app.listen(process.env.PORT ||5004,()=>{
    console.log('server corriendo en http://localhost:5004')
})

