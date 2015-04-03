var app = require('../app');
var supertest = require('supertest');
var should = require('should');

describe('home', function(){

    it('should pass', function(done){
        supertest(app)
            .get('/')
            .expect(200)
            .end(function(err, res){
                res.status.should.equal(200)
                done();
            })
    })

    it('should not pass', function(done){
        supertest(app)
            .get('/abc')
            .expect(404)
            .end(function(err, res){
                res.status.should.equal(404)
                done();
            })
    })

})