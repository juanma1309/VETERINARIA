pipeline {
    agent any
    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main', url: 'https://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@github.com/juanma1309/VETERINARIA.git'
            }
        }

        stage('Iniciar Base de Datos') {
            steps {
                script {
                    // Agrega aquí los comandos para iniciar la base de datos
                    // Por ejemplo, si estás utilizando un sistema de gestión de bases de datos como MySQL:
                    sh 'service mysql start'
                    
                    // Espera a que la base de datos esté disponible antes de continuar (puede variar según la base de datos que estés utilizando)
                    sh 'while ! mysqladmin ping -hlocalhost --silent; do sleep 1; done'
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

