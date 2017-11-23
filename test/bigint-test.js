var mocha  = require('mocha')
  , assert = require('chai').assert
  , expect = require('chai').expect
  , BigNumber = require('bignumber.js')
  ;

describe("Testing bigint support", function(){
    var input = '{"big":9223372036854775807,"small":123}';

    it("Should show classic JSON.parse lacks bigint support", function(done){
        var obj = JSON.parse(input);
        expect(obj.small.toString(), "string from small int").to.equal("123");
        expect(obj.big.toString(), "string from big int").to.not.equal("9223372036854775807");

        var output = JSON.stringify(obj);
        expect(output).to.not.equal(input);
        done();
    });

    it("Should show JSNbig does support bigint parse/stringify roundtrip", function(done){
        var JSONbig = require('../index');
        var obj = JSONbig.parse(input);
        expect(obj.small.toString(), "string from small int").to.equal("123");
        expect(obj.big.toString(), "string from big int").to.equal("9223372036854775807");
        expect(obj.big, "instanceof big int").to.be.instanceof(BigNumber);

        var output = JSONbig.stringify(obj);
        expect(output).to.equal(input);
        done();
    });

    it('should leave numbers with non-zero mantissa as floats', function(done){
        var JSONbig = require('../index');
        var obj = JSONbig.parse('12345678912345.123');
        expect(typeof obj).to.equal('number');
        done();
    });

    it('should convert numbers with a zero mantissa to ints if the integer part is longer than 15 chars', function(done){
      var inputLong = '9223372036854775807.00000';
      var inputShort = '75807.00000';
      var JSONbig = require('../index');

      var objLong = JSONbig.parse(inputLong);
      expect(objLong, "instanceof big int").to.be.instanceof(BigNumber);
      expect(objLong.toString(), "string from big int").to.equal("9223372036854775807");

      var objShort = JSONbig.parse(inputShort);
      expect(objShort).to.be.a('number');
      expect(objShort).to.equal(75807);

      done();
    });
});
