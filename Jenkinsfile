pipeline {
    agent any
    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main', url: 'https://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@github.com/juanma1309/VETERINARIA.git'
            }
        }
        stage('Instalar Dependencias') {
            steps {
                script {
                    // Instala las dependencias necesarias (Node.js y npm)
                    sh 'curl -sL https://deb.nodesource.com/setup_14.x | bash -'
                    sh 'apt-get install -y nodejs'
                }
            }
        }

        stage('Ejecutar Pruebas Unitarias') {
            steps {
                script {
                    // Instala las dependencias necesarias (Node.js y npm)
                    sh 'curl -sL https://deb.nodesource.com/setup_14.x | bash -'
                    sh 'apt-get install -y nodejs'
        
                    // Instala las dependencias de pruebas
                    sh 'npm install mocha chai sinon --save-dev'
        
                    // Ejecuta las pruebas unitarias
                    sh 'npx mocha tus-pruebas.js'  // Reemplaza con la ruta correcta a tus pruebas
                }
            }
        }

        

    }
}
