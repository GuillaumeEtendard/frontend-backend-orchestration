pipeline {
  environment {
    imagename = "yenigul/hacicenkins2332"
    registryCredential = 'yenigul-dockerhub2332'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Building and Running image') {
      steps{
          sh 'docker-compose build'
          sh 'docker-compose up -d'
      }
    }
  }
}