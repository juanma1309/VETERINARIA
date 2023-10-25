const mysql = require('mysql');

const conexion = mysql. createConnection({
host: "seminariovet.mysql.database.azure.com",
user: "administrador",
password: "Seminario2023@",
database: "seminariovet",
});

conexion. connect((error)=>{
    if(error){
    console.error('El error de conexión es: '+ error);
    return
    }
    console. log(' ¡Conectado a la BD MySQLI');
});

module.exports = conexion;