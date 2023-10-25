const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const getConnection = require('./database/db');


router.get('/', (req, res)=>{
    res.render('login.ejs');
});

router.get('/index', (req, res)=>{
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

//RUTA PARA ELIMINAR REGISTROS
router.get('/delete/:id',(req,res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM citas3 WHERE id = ?',[id], (error, results)=>{
        if(error){
            throw error
        }else{
            res.redirect('/index');
        }
    });
});


router.post('/auth',(req, res)=> {
	const user = req.body.user;
	const pass = req.body.pass;    
	if (user && pass) {
		conexion.query('SELECT count(*) FROM login WHERE mail = ? && password = ?', [user , pass], (error, results)=> {
			if( error) {    
				throw error
			} else {       
                if(Object.values(results[0])[0] == 0){
                    console.log('denegado')
                }else{
                    res.redirect('/index');
                }
                
			}			
		})
	}
});

module.exports = router