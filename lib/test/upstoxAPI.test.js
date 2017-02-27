/**
 * Created by renuka on 27/2/17.
 */


var should = require('chai').should;
var mocha = require('mocha');
var expect = require('chai').expect;

var Upstox = require("../index");

describe('#UpstoxAPI', function() {
    var upstox;
    beforeEach(function(done){
        upstox = new Upstox("123");

    });

    describe("getSessionToken", function(){
        it('Should return a sessionToken after getting successfully logged in ', function(done) {
            var sessionToken = upstox.getSessionToken();
            should.exist(sessionToken);
            sessionToken.should.have.property('SUCCESS');
            done();
        });
    })

});
