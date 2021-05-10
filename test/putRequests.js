const assert = require('assert');
const mocha = require('mocha');
const should = require('should');
const supertest = require('supertest');
const constants = require('../lib/constants.js');
const utils = require('../lib/utils.js');
const dataModel = require('../lib/dataModel.js')
const endPoints = require('../helper/putRequest/api_endpoints.js');
const validator = require('../helper/putRequest/putRequest_validator.js');

let baseUrl = constants.baseUrl;

describe('Put call', function(){
    describe('Sending Request...', function(){
        it('Api should Update a entry', async function(){
            let Requestbody = validPayload(dataModel.testData.id, dataModel.testData.testTile, dataModel.testData.testBody,dataModel.testData.userId )
            console.log('Request Payload: ', Requestbody );
            let res = await utils.PutRequest(baseUrl, endPoints.endpoint, Requestbody).then(function(res){
                console.log('Checking Bad Request= ', res.badRequest);
                console.log('Response Body is= ', res.body);
                res.status.should.equal(200);
                console.log('Status code of api is= ', res.status); 
                if(res.status == 200){
                    console.log("Entry Updated!")
                    validator.ResponsebodyValidator(res);

                }else{
                    console.log(error);
                }
            });
        });
    });
});
var validPayload = function (id, title, body, userId){
    return{
        "id" : dataModel.testData.id,
        "title" : dataModel.testData.testTile,
        "body" : dataModel.testData.testBody,
        "userId" : dataModel.testData.userId
    }
}

