pipeline {
    agent any
    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main', url: 'https://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@github.com/juanma1309/VETERINARIA.git'
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

     stage('Build') {
         steps {
             echo 'Hola, Veterinaria. Comenzando a construir ka aplicacion.'
         }
     }

     stage('Test') {
         steps {
             input('¿Quieres continuar?')
         }
     }

     stage('Deploy') {
         parallel {
             stage('Inicio de implementacin') {
                 steps {
                     echo "Iniciar el despliegue.."
                 }             
             }
         }
    }
    }
}
