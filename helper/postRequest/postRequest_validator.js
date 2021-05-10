//validator to verify data types and actual values of Json response
const chai = require('chai');
const dataModel =require('../../lib/dataModel.js');

exports.ResponsebodyValidator = function(res){
    describe('Verifying Json response', function(){
        it('Response verified', function(){
            chai.expect(res.body.title).to.be.a('string');
            chai.expect(res.body.title).to.have.equal(dataModel.testData.testTile);
            chai.expect(res.body.body).to.be.a('string');
            chai.expect(res.body.body).to.have.equal(dataModel.testData.testBody);
            chai.expect(res.body.userId).to.be.a('number');
            chai.expect(res.body.userId).to.have.equal(dataModel.testData.userId);
            chai.expect(res.body.id).to.be.a('number');
            chai.expect(res.body.id).to.have.equal(global._id);
        })
    })
}