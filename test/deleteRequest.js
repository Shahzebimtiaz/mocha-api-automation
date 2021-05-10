const assert = require('assert');
const mocha = require('mocha');
const should = require('should');
const supertest = require('supertest');
const constants = require('../lib/constants.js');
const utils = require('../lib/utils.js');
const dataModel = require('../lib/dataModel.js')
const endPoints = require('../helper/putRequest/api_endpoints.js');
const validator = require('../helper/deleteRequest/deleteRequest_validator.js');

let baseUrl = constants.baseUrl;

describe('Delete call', function(){
    describe('Sending Request...', function(){
        it('Api should delete a record', async function(){
            let res = await utils.DeleteRequest(baseUrl, endPoints.endpoint).then(function(res){
                console.log('Checking Bad Request= ', res.badRequest);
                console.log('Response Body is= ', res.body);
                res.status.should.equal(200);
                console.log('Status code of api is= ', res.status); 
                if(res.status == 200){
                    console.log("Record Deleted!")
                }else{
                    console.log(error);
                }
            });
        });
    });
});


