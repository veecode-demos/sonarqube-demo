# sonarqube-demo

Simple project for Sonarqube cloud reporting

## Setup

If you want to run Sonarqube scanner locally, remember to set the following environment variables:

- SONAR_ORG: your Sonarqube organization
- SONAR_PROJECT_KEY: your Sonarqube project key
- SONAR_TOKEN: your Sonarqube token

## Run tests and Sonarqube scan

```bash
npm install
npm run test
npm run test:coverage
npm run lint
npm run sonar:scan
```

This will populate your Sonarqube project with the latest code quality metrics.
