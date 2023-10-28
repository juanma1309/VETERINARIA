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
                // Instala las dependencias necesarias
                sh 'npm install'
    
                // Ejecuta las pruebas de integración
                sh './node apps.js'
    
                // Asegúrate de que el estado de salida sea exitoso (0) para que Jenkins lo reconozca
                currentBuild.resultIsBetterOrEqualTo('SUCCESS')
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
