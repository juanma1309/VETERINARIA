const { json } = require('express');
const conexion = require('../database/db');

exports.save = (req,res) =>{
    const mascota = req.body.mascota;
    const correo = req.body.correo;
    const propietario = req.body.propietario;
    const telefono = req.body.telefono;
    const fecha = req.body.fecha;
    const sintomas = req.body.sintomas;
    // console.log( mascota + '-' + propietario+ '-' +telefono+ '-' +fecha+ '-' +sintomas);
    conexion.query('INSERT INTO citas3 SET ?', {mascota:mascota,correo:correo, propietario:propietario, telefono:telefono, fecha:fecha, sintomas:sintomas}, (error,results)=>{
        if(error){
            console.log(error);
        }else{
            console.log('SUBIDA CON EXITO');
            res.redirect('/index');
        }
    })
}

exports.update = (req,res) =>{
    const id = req.body.id;
    const mascota = req.body.mascota;
    const propietario = req.body.propietario;
    const telefono = req.body.telefono;
    const fecha = req.body.fecha;
    const sintomas = req.body.sintomas;

    conexion.query('UPDATE citas3 SET ? WHERE id = ?', [{mascota:mascota, propietario:propietario, telefono:telefono, fecha:fecha, sintomas:sintomas} ,id], (error,results)=>{
        if(error){
            console.log(error);
        }else{
            console.log('EDITADA CON EXITO');
            res.redirect('/index');
        }
    })
}


exports.saveUsuario = (req,res) =>{
    const correo = req.body.Correo;
    const nombre = req.body.Nombre;
    const password = req.body.password;
    const rol = req.body.rol;
    console.log( nombre + '-' + correo+ '-' +password+ '-' +rol);
    conexion.query('INSERT INTO login SET ?', {correo:correo, nombre:nombre,  password:password, rol:rol}, (error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/index');
        }
    })
}