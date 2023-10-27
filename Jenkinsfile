pipeline {
    agent any

    stages {
        stage('Compilar Base de Datos') {
            steps {
                script {
                    // Iniciar un contenedor Docker con MySQL
                    sh 'docker run -d --name my-mysql-container -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 3306:3306 mysql:latest'

                    // Esperar a que la base de datos esté disponible (puede variar según la base de datos)
                    // Puedes usar una herramienta como 'wait-for-it' o 'nc'
                    sh 'wait-for-it.sh -t 60 localhost:3306'

                    // Ejecutar el archivo db.js para configurar la base de datos
                    sh 'node database/db.js'
                }
            }
        }

        stage('Ejecutar Pruebas de Integración') {
            steps {
                script {
                    // Ejecutar pruebas de integración en la base de datos compilada
                    sh 'npm install'  // Instala las dependencias de las pruebas
                    sh 'node integration-tests.js'  // Ejecuta las pruebas de integración
                }
            }
        }
    }

    post {
        success {
            echo 'Compilación de base de datos exitosa.'
        }
        failure {
            echo 'Compilación de base de datos fallida.'
        }
    }
}

