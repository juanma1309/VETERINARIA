const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use('/', require('./router'));

// app.listen(5004,()=>{
//     console.log('server corriendo en http://localhost:5004')
// })

app.set('port',process.env.PORT || 5005);