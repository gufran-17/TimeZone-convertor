pipeline {
    agent any

    stages {

        stage('Clone from GitHub') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/gufran-17/TimeZone-convertor.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t timezone-app .'
            }
        }

        stage('Deploy (Docker Run)') {
            steps {
                sh '''
                  docker stop timezone-app || true
                  docker rm timezone-app || true
                  docker run -d --name timezone-app -p 3000:3000 timezone-app
                '''
            }
        }
    }

    post {
        success {
            echo "Pipeline executed successfully!"
        }
        failure {
            echo "Pipeline failed!"
        }
    }
}
