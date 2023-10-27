const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
// const app = require('./app');

const getConnection = require('./database/db');

// app.listen(app.get('port'));


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

router.get('/usuario', (req, res)=>{
    res.render('usuario');
}) ;

const crud = require('./controllers/crud');
const conexion = require('./database/db');
router.post('/save', crud.save);
router.post('/saveUsuario', crud.saveUsuario);
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


router.post('/auth', (req, res) => {
    const user = req.body.user;
    const pass = req.body.pass;
    const rol = 'admin';
    if (user && pass) {
        conexion.query('SELECT count(*) FROM login WHERE correo = ? && password = ?', [user, pass], (error, results) => {
            if (error) {
                throw error;
            } else {
                const userCount = Object.values(results[0])[0];

                if (userCount === 0) {
                    // console.log('Access denied');
                    res.redirect('/'); 
                } else {
                    conexion.query('SELECT count(*) FROM login WHERE correo = ? && password = ? && rol = ?', [user, pass, rol], (error, results) => {
                        if (error) {
                            throw error;
                        } else {
                            const adminCount = Object.values(results[0])[0];

                            if (adminCount === 0) {
                                //prubea
                                getConnection.query('select * from citas3 where correo = ?',[user], (error, results) => {
                                    if(error){
                                        throw error
                                    }else{
                                        res.render('citas.ejs',{results:results});
                                        // console.log(user)
                                    }
                                })
                            } else {
                                // console.log('Bienvenido admin');
                                res.redirect('/index'); 
                            }
                        }
                    });
                }
            }
        });
    }
});

module.exports = router