# Introduction

This is a sample project to show how API funtional test automation can be performed with Mocha.
This project uses https://jsonplaceholder.typicode.com/ as the appliction for testing. It is a free to use fake Onlie Rest API for testing.

for further on Mocha, take a look at "https://mochajs.org/"

# Project Setup

This project is build with node version 6.13.4 and mocha version 8.4.0

To start from scratch use following:

npm init

npm install --save-dev mocha

npm install chai --save-dev

npm install should --save-dev

npm install request --save-dev

npm install supertest--save-dev

# Framework Organization
lib
│   ├── constants.js         - Base url of API's
│   └── dataModel.js         - Data for testing purpose in json fromat
|   └── utils.js             - This file contains all the base fucntions for Get, Post, Put and Delete

├── README.md
├── 
|
├── helper
│   ├── getRequest
|         |------  api_endpoints.js           - This file contains all the valid/invalid endpoints for get api's
|         |------  getRequest_validator.js    - This is validator to validate json response of get api's  
|   ├── postRequest
|         |------  api_endpoints.js           - This file contains all the valid/invalid endpoints for post api's
|         |------  postRequest_validator.js    - This is validator to validate json response of post api's
|   ├── putRequest
|         |------  api_endpoints.js           - This file contains all the valid/invalid endpoints for put api's
|         |------  putRequest_validator.js    - This is validator to validate json response of put api's
|   ├── deleteRequest
|         |------  api_endpoints.js           - This file contains all the valid/invalid endpoints for delete api's
|         |------  deleteRequest_validator.js    - This is validator to validate json response of delete api's
|
├── test
│   ├── getRequests.js         - Executable class (calling of all the functions for get api is done here)
│   └── postRequests.js        - Executable class (calling of all the functions for post api is done here)
│   └── putRequests.js         - Executable class (calling of all the functions for put api is done here)
│   └── deleteRequest.js       - Executable class (calling of all the functions for delete api is done here)


# Fucntional Tests

To run functional tests

go to directory test and use following command

npm test

or

mocha test

or 

mocha .\test\getRequests.js

