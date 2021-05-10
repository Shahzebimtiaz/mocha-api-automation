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

# lib directory
This directory contains Base url of API's in constant.js, Data for testing purpose in json fromat in datamodel.js and all the base fucntions for Get, Post, Put and Delete in utils.js.

# helper directory
This file conatins different helpers for get, post, put and delete methods. File with api_endpoints.js contains end point for api's and xyz_validator contains validation for Json response.

# test directory
This directory contains all the executable clases for fucntional testing.



# Fucntional Tests

To run functional tests

go to directory test and use following command

npm test

mocha test
 
mocha .\test\getRequests.js

