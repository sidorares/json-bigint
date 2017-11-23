var mocha  = require('mocha')
  , assert = require('chai').assert
  , expect = require('chai').expect
  , BigNumber = require('bignumber.js')
  ;

describe("Testing 'strictFloatHints' option", function(){

    [
      '123.123',
      '12345678901234567890.000',
      '12345678901234567890.123',
      '00000000000000000000.000'
    ].forEach(function(input) {
      it("Should treat input " + input + " as a float", function(done){
        var JSONbig = require('../index')({"strictFloatHints": true});
        var result = JSONbig.parse(input);
        expect(result).to.be.a('number');
        done();
      });
    });

  [
    '12345678901234567890',
    '12345678901234567890',
    '00000000000000000000'
  ].forEach(function(input) {
    it("Should treat input " + input + " as a BigNumber", function(done){
      var JSONbig = require('../index')({"strictFloatHints": true});
      var result = JSONbig.parse(input);
      expect(result).to.be.instanceof(BigNumber);
      done();
    });
  });


  [
    '123',
    '0'
  ].forEach(function(input) {
    it("Should treat input " + input + " as an ordinary number", function(done){
      var JSONbig = require('../index')({"strictFloatHints": true});
      var result = JSONbig.parse(input);
      expect(result).to.be.a('number');
      done();
    });
  });

});
