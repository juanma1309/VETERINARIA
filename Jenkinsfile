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

        stage('UNIT Testing') {
            steps {
                sh 'mvn test'
            }
        }

        stage('Integracion Testing') {
            steps {
                sh 'mvn verify -DskipUnistTests'
            }
        }

        stage('Maven Build') {
            steps {
                sh 'mvn clean install'
            }
        }

        stage('SonarQube analysis') {
            steps {
                script {
                    withSonarQubeEnv {
                        sh 'mvn clean package sonar:sonar'
                    }
                }
            }
        }

        stage('Quality Gate status') {
            steps {
                script {
                    waitForQualityGate false
                }
            }
        }
    }
}

