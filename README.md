# Introduction

This is a sample project to show how API funtional test automation can be performed with Mocha.
This project uses https://jsonplaceholder.typicode.com/ as the appliction for testing. It is a free to use fake Onlie Rest API for testing.

for further on Mocha, take a look at "https://mochajs.org/"

### Project Setup

This project is build with node version 6.13.4 and mocha version 8.4.0

To start from scratch use following:
```
npm init
```
```
npm install --save-dev mocha
```
```
npm install chai --save-dev
```
```
npm install should --save-dev
```
```
npm install request --save-dev
```
```
npm install supertest--save-dev
```

### Fucntional Tests

To run functional tests

go to directory test and use following command
```
npm test
```
```
mocha test
```
```
mocha .\test\getRequests.js
```


### Framework Organization
```
├── README.md
├── helper
│   ├── getRequest              
|       └── api_endpoints.js            - API endpoints for Get method 
|       └── getRequest_validator.js     - Validator for json response to verify data types and value 
├── lib
│   ├── constants.js                    - Environment configs
│   ├── dataModel.js                    - Test data in json form
│   ├── utils.js                        - fucntions to send API calls with methods
├── test
│   ├── getRequest.js                   - e2e functional test file
```
