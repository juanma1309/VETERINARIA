pipeline {
    agent any
	stages {
		stage('Git Checkout') {
				steps {
				git branch: 'main', url: 'https://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@github.com/juanma1309/VETERINARIA.git'

				}
			}
        
        stage('Configurar Base de Datos') {
            steps {
                script {
                    sh 'npm install mysql'  // Instala el módulo MySQL para Node.js (asegúrate de que npm esté configurado correctamente)
                    
                    // Configura la conexión a la base de datos
                    const mysql = require('mysql');
                    const conexion = mysql.createConnection({
                        host: "seminariovet.mysql.database.azure.com",
                        user: "administrador",
                        password: "Seminario2023@",
                        database: "seminariovet",
                    });

                    conexion.connect((error) => {
                        if (error) {
                            console.error('El error de conexión es: ' + error);
                            return;
                        }
                        console.log('¡Conectado a la BD MySQLI');
                    });

                    // Exporta la conexión para que esté disponible en tus pruebas
                    module.exports = conexion;
                }
            }
        }

        stage('Ejecutar Pruebas de Base de Datos') {
            steps {
                script {
                    // Importa la conexión a la base de datos
                    const conexion = require('./conexion.js');  // Ajusta la ruta al archivo de conexión si es necesario

                    // Ahora puedes utilizar 'conexion' para realizar pruebas en la base de datos
                    // Ejecuta tus pruebas aquí
                }
            }
        }

        stage('Limpiar y Cerrar Conexión a la Base de Datos') {
            steps {
                script {
                    const conexion = require('./conexion.js');  // Ajusta la ruta al archivo de conexión si es necesario

                    // Realiza cualquier limpieza necesaria o cierre de la conexión
                    conexion.end();
                }
            }
        }
    }
}

