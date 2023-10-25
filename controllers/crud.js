const { json } = require('express');
const conexion = require('../database/db');

exports.save = (req,res) =>{
    const mascota = req.body.mascota;
    const propietario = req.body.propietario;
    const telefono = req.body.telefono;
    const fecha = req.body.fecha;
    const sintomas = req.body.sintomas;
    // console.log( mascota + '-' + propietario+ '-' +telefono+ '-' +fecha+ '-' +sintomas);
    conexion.query('INSERT INTO citas3 SET ?', {mascota:mascota, propietario:propietario, telefono:telefono, fecha:fecha, sintomas:sintomas}, (error,results)=>{
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


