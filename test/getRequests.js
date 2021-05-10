//calling of functions will be done here
const assert = require('assert');
const mocha = require('mocha');
const should = require('should');
const supertest = require('supertest');
const constants = require('../lib/constants.js');
const utils = require('../lib/utils.js');
const endPoints = require('../helper/getRequest/api_endpoints.js');
const validator = require('../helper/getRequest/getRequest_validator.js');

let baseUrl = constants.baseUrl;

describe('Get posts call', function(){
    describe('Get Request...', function(){
        it('Api should return all the posts', (done) => {
            let res = utils.GetRequest(baseUrl, endPoints.validEndpoint).then(function(res){
                console.log('Checking Bad Request= ', res.badRequest);
                console.log('Response Body is= ', res.body);
                res.status.should.equal(200);
                console.log('Status code of api is= ', res.status); 
                done();  
            });
        });
    });
});
describe('Get posts call with ID', function(){
    describe('Sending get request...', function(){
        it('Api should retrun only post with ID 1', (done) =>{
            let res = utils.GetRequest(baseUrl, endPoints.validEndpoint+endPoints.postsByID).then(function(res){
                console.log('Checking Bad Request= ', res.badRequest);
                console.log('Response Body is= ', res.body);
                res.status.should.equal(200);
                console.log('status code is= ', res.status);
                validator.ResponsebodyValidator(res);
                done();
            });
        });
    });
});
describe('Get posts call with comments', function(){
    describe('Sending get request...', function(){
        it('Api should retrun all the results with comments', (done) => {
            let res = utils.GetRequest(baseUrl, endPoints.validEndpoint+endPoints.postsByID+endPoints.postsBycomments).then(function(res){
                console.log('Checking Bad Request= ', res.badRequest);
                console.log('Response Body is= ', res.body);
                res.status.should.equal(200);
                console.log('status code is= ', res.status);
                validator.ResponsebodyValidatorforCommentscall(res);
                done();
            });
        });
    });
});
describe('Get posts call with query parameter', function(){
    describe('Sending get request...', function(){
        it('Api should retrun all the results with query parameter', (done) =>{
            let res = utils.GetRequest(baseUrl, endPoints.validEndpoint+endPoints.postsByID+endPoints.postsBycomments+endPoints.queryParameter).then(function(res){
                console.log('Checking Bad Request= ', res.badRequest);
                console.log('Response Body is= ', res.body);
                res.status.should.equal(200);
                console.log('status code is= ', res.status);
                validator.ResponsebodyValidatorforCommentscall(res);
                done();
            });
        });
    });
});
