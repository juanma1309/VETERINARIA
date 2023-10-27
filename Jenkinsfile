pipeline {
    agent any
    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main', url: 'https://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@github.com/juanma1309/VETERINARIA.git'
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
