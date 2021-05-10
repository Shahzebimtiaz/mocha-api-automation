const assert = require('assert');
const mocha = require('mocha');
const should = require('should');
const supertest = require('supertest');
const constants = require('../lib/constants.js');
const utils = require('../lib/utils.js');
const dataModel = require('../lib/dataModel.js')
const endPoints = require('../helper/postRequest/api_endpoints.js');
const validator = require('../helper/postRequest/postRequest_validator.js');

let baseUrl = constants.baseUrl;

describe('Post call', function(){
    describe('Sending Request...', function(){
        it('Api should create a new entry', async function(){
            let Requestbody = validPayload(dataModel.testData.testTile, dataModel.testData.testBody, dataModel.testData.userId )
            console.log('Request Payload: ', Requestbody );
            let res = await utils.PostRequest(baseUrl, endPoints.validEndpoint, Requestbody).then(function(res){
                console.log('Checking Bad Request= ', res.badRequest);
                console.log('Response Body is= ', res.body);
                res.status.should.equal(201);
                global._id = res.body.id; //getting id from the request response to use it further in the project
                console.log('Status code of api is= ', res.status); 
                if(res.status == 201){
                    console.log("New Entry added!")
                    validator.ResponsebodyValidator(res);

                }else{
                    console.log(error);
                }
            });
        });
    });
});
var validPayload = function (title, body, userId){
    return{
        "title" : dataModel.testData.testTile,
        "body" : dataModel.testData.testBody,
        "userId" : dataModel.testData.userId
    }
}