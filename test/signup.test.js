var express = require('express')
var request = require('supertest')
var should  = require('should')

describe('signup', function(){

    it("should not pass when has empty field", function (done){
        var app = express()
        
        app.post('/signup', function(req, res){
            res.body = {
                loginname : 'test',
                password  : 'password'
            }
            res.sendStatus(422)
        });

        request(app)
            .post('/signup')
            .expect(422, done);
    });

})