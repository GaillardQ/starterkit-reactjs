#!/usr/bin/env groovy

pipeline {
    agent any
    options {
        timeout(time: 1, unit: 'HOURS')
    }
    stages {
        stage('Init') {
            steps {
                bitbucketStatusNotify(buildState: 'INPROGRESS', credentialsId: 'Bitbucket_Notifier')
            }
        }
        stage('Prepare') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test'){
            steps {
                sh 'npm run test'
            }
        }
        stage('SonarQube analysis') {
            when {
                expression { env.BRANCH_NAME == 'master' }
            }
            steps {
                script {
                    scannerHome = tool 'Sonarqube';
                }
                withSonarQubeEnv('Sonar') {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
        stage('Deployment') {
            when {
                expression { env.BRANCH_NAME == 'master' }
            }
            steps {
                ansiblePlaybook (
                    installation: 'ansible',
                    inventory: '$WORKSPACE/inventory.ini',
                    playbook: '$WORKSPACE/deploy.yml'
                )
            }
        }
    }
    post {
            success {
                bitbucketStatusNotify(buildState: 'SUCCESSFUL', credentialsId: 'Bitbucket_Notifier')
                deleteDir() /* clean up our workspace */
            }
            unstable {
                bitbucketStatusNotify(buildState: 'FAILED', credentialsId: 'Bitbucket_Notifier')
                deleteDir() /* clean up our workspace */
            }
            failure {
                bitbucketStatusNotify(buildState: 'FAILED', credentialsId: 'Bitbucket_Notifier')
                sh 'git log --format="%ae" | head -1 > commit-author.txt'
                script {
                    def commitAuthor = readFile('commit-author.txt').trim()
                    emailext subject: "[StarterKit-ReactJS] Build Failed on #${env.BUILD_NUMBER} ${env.JOB_NAME}", body: "Build #${env.BUILD_NUMBER} for ${env.JOB_NAME} failed, ${env.BUILD_URL}", attachLog: true, to: "${commitAuthor}"
                }

                deleteDir() /* clean up our workspace */
            }
        }
}