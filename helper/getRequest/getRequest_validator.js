//Here you are going to verify the response body of the request
const chai = require('chai');
const dataModel =require('../../lib/dataModel.js');

exports.ResponsebodyValidator = function(res){
    describe('Verifying Json response', function(){
        it('Response verified', function(){
            chai.expect(res.body.userId).to.be.a('number');
            chai.expect(res.body.userId).to.have.equal(dataModel.testData.userId);
            chai.expect(res.body.id).to.be.a('number');
            chai.expect(res.body.id).to.have.equal(dataModel.testData.id);
            chai.expect(res.body.title).to.be.a('string');
            chai.expect(res.body.title).to.have.equal(dataModel.testData.title);
            chai.expect(res.body.body).to.be.a('string');
            chai.expect(res.body.body).to.have.equal(dataModel.testData.body);
        })
    })
}
exports.ResponsebodyValidatorforCommentscall = function(res){
    describe('Verifying Json response', function(){
        it('Response verified', function(){
            chai.expect(res.body[0].postId).to.be.a('number');
            chai.expect(res.body[0].postId).to.have.equal(dataModel.testData.postId);
            chai.expect(res.body[0].id).to.be.a('number');
            chai.expect(res.body[0].id).to.have.equal(dataModel.testData.id);
            chai.expect(res.body[0].name).to.be.a('string');
            chai.expect(res.body[0].name).to.have.equal(dataModel.testData.name);
            chai.expect(res.body[0].email).to.be.a('string');
            chai.expect(res.body[0].email).to.have.equal(dataModel.testData.email);
            chai.expect(res.body[0].body).to.be.a('string');
            chai.expect(res.body[0].body).to.have.equal(dataModel.testData.body1);
        })
    })
}