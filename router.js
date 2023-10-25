const express = require('express');
const router = express.Router();

const getConnection = require('./database/db');


router.get('/', (req, res)=>{
    
    
    getConnection.query('select * from usuario', (error, results) => {
        if(error){
            throw error
        }else{
            res.render('index.ejs',{results:results});
        }
    })
});

router.get('/create', (req, res)=>{
    res.render('create');
}) ;


module.exports = router