//This file contains all the funtions for Api's methods
const supertest = require('supertest');
var baseUrl = require('url');
//funtion for Get requests with out any authorization
exports.GetRequest = (baseUrl, EndPoint) => {
    try{
        let res = supertest(baseUrl).get(EndPoint)
        .set('Accept' , 'application/json')
        .set('Content-Type' , 'application/json');
        return res;
    }catch(error){
        console.log('Error in sending Get request with out auhtorization' , error);
    }
};
//function for Post request with out any authorization
exports.PostRequest = async (baseUrl, EndPoint, requestBody) => {
    try{
        let res = await supertest(baseUrl).post(EndPoint)
            .set('Accept' , 'application/json')
            .set('Content-Type' , 'application/json; charset=UTF-8')
            .send(requestBody);
        return res;
    }catch(error){
        console.log('Error in Sending Post Request' , error );
    }
};
//function for put request with out authorization
exports.PutRequest = async (baseUrl, EndPoint, requestBody) => {
    try{
        let res = await supertest(baseUrl).put(EndPoint)
            .set('Accept' , 'application/json')
            .set('Content-Type' , 'application/json; charset=UTF-8')
            .send(requestBody);
        return res;
    }catch(error){
        console.log('Error in Sending Put Request' , error );
    }
};
//function for delete request with out authorization 
exports.DeleteRequest = async (baseUrl, EndPoint) => {
    try{
        let res = await supertest(baseUrl).del(EndPoint)
        .set('Accept' , 'application/json')
        .set('Content-Type' , 'application/json')
        return res;
    }catch(err){
        console.log('Error in Sending DELETE Request' , err );
    }
}; 