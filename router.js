const express = require('express');
const router = express.Router();

const getConnection = require('./database/db');


router.get('/', (req, res)=>{
    
    
    getConnection.query('select * from citas3', (error, results) => {
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

const crud = require('./controllers/crud');
const conexion = require('./database/db');
router.post('/save', crud.save);
router.post('/update', crud.update);


//RUTA PARA EDITAR REGISTROS

router.get('/edit/:id',(req,res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM citas3 WHERE id = ?',[id], (error, results)=>{
        if(error){
            throw error
        }else{
            res.render('edit.ejs',{user:results[0]});
        }
    });
});



module.exports = router