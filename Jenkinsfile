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
                    // Ejecuta las pruebas unitarias
                    sh 'npm install'  // Instala las dependencias de tus pruebas
                    sh 'npx mocha crud.js'  // Ejecuta las pruebas con Mocha

                    // Comprueba el resultado de las pruebas
                    if (currentBuild.resultIsBetterOrEqualTo('SUCCESS')) {
                        currentBuild.result = 'SUCCESS'
                    } else {
                        currentBuild.result = 'FAILURE'
                    }
                }
            }
        

    }
}
