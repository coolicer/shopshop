var app = require('../app')
var request = require('supertest')(app)
var should  = require('should')

describe('Signup', function(){

    it("should return correct Content-Type", function (done){
   
        request
            .get('/signup')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(200, done)
            
    });

    it("should return 404", function (done){
   
        request
            .get('/signup123')
            .expect(404, done)
            
    });

    it(".post should return error message", function (done){
   
        request
            .post('/signup')
            .send( { loginname: "test", password: "123456"} )
            .expect('statusCode', 422)
            .end(function(err, res){

                done()
            })
    });

})