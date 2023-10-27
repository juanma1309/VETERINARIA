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
                    // Configuración de la base de datos (por ejemplo, creación de base de datos, tablas, usuarios)
                    sh 'mysql -u root -e "CREATE DATABASE mydb;"'
                    sh 'mysql -u root -e "GRANT ALL PRIVILEGES ON mydb.* TO \'myuser\'@\'localhost\';"'

                    // Iniciar la base de datos
                    sh 'service mysql start'

                    // Esperar a que la base de datos esté disponible
                    sh 'while ! mysqladmin ping -hlocalhost --silent; do sleep 1; done'
                }
            }
        }

        stage('UNIT Testing') {
            steps {
                sh 'mvn test'
            }
        }

        // Otras etapas de tu pipeline

        stage('Detener Base de Datos') {
            steps {
                script {
                    // Detener la base de datos después de su uso
                    sh 'service mysql stop'
                }
            }
        }
    }
}

