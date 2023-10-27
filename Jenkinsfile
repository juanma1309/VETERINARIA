pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                script {
                    // Instalar las dependencias de Node.js
                    sh 'npm install'
                    // Configurar la base de datos (Puedes usar Docker para ejecutar una instancia de MySQL)
                    sh 'docker run -d --name mysql-container -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 3306:3306 mysql:latest'
                    sh 'wait-for-it.sh -t 60 localhost:3306'
                    sh 'node database/db.js'
                }
            }
        }

        stage('Unit Testing') {
            steps {
                // Ejecutar tus pruebas unitarias
                sh 'npm test'
            }
        }

        stage('Integration Testing') {
            steps {
                // Ejecutar tus pruebas de integración
                sh 'npm run integration-test'
            }
        }

        stage('Deployment') {
            steps {
                // Despliega tu aplicación Node.js
                sh 'npm run deploy'
            }
        }
    }

    post {
        always {
            // Limpieza: Detener el contenedor de MySQL
            sh 'docker stop mysql-container'
            sh 'docker rm mysql-container'
        }
    }
}
