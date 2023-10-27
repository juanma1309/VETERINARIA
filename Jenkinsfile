pipeline {
    agent any
    stages {
        stage('Configurar Base de Datos') {
            steps {
                script {
                    // Configura la conexión a la base de datos
                    const mysql = require('mysql');
                    const conexion = mysql.createConnection({
                        host: "nombre_del_host",
                        user: "nombre_de_usuario",
                        password: "contraseña",
                        database: "nombre_de_la_base_de_datos",
                    });

                    conexion.connect((error) => {
                        if (error) {
                            echo 'Error al conectar a la base de datos: ' + error;
                            currentBuild.result = 'FAILURE'
                        } else {
                            echo 'Conectado a la base de datos MySQL';
                        }
                    });

                    // Exporta la conexión para que esté disponible en tus pruebas
                    node {
                        env.MYSQL_CONNECTION = conexion;
                    }
                }
            }
        }

        stage('Ejecutar Prueba de Base de Datos') {
            steps {
                script {
                    // Importa la conexión a la base de datos
                    const conexion = env.MYSQL_CONNECTION;

                    // Realiza una prueba simple en la base de datos (por ejemplo, consulta una tabla)
                    conexion.query('SELECT * FROM mi_tabla', (error, results, fields) => {
                        if (error) {
                            echo 'Error en la prueba de base de datos: ' + error;
                            currentBuild.result = 'FAILURE'
                        } else {
                            echo 'Prueba de base de datos exitosa';
                        }
                    });
                }
            }
        }

        stage('Cerrar Conexión a la Base de Datos') {
            steps {
                script {
                    // Importa la conexión a la base de datos
                    const conexion = env.MYSQL_CONNECTION;

                    // Cierra la conexión a la base de datos
                    conexion.end();
                }
            }
        }
    }
}

