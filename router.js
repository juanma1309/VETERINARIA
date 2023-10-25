const express = require('express');
const router = express.Router();

const getConnection = require('./database/db');

let get_request = new sql.Request(getConnection);

router.get('/', (req, res)=>{
    get_request.query('select * from [dbo].[usuarios]', (error, results) => {
        if(error){
            throw error
        }else{
            res.send(results)
        }
    })
});


module.exports = router