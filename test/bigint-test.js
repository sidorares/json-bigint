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

    [
      ['1.23456789012345678901', '1.23456789012345678901'],
      ['12345678901234.5678901', '12345678901234.5678901'],
      ['00000000000000.0000000', '0']
    ].forEach(function (data) {
        var input = data[0];
        var expected = data[1];
        it('should convert any number longer than 15 chars to bignumber, even floats like' + input, function(done){
          var JSONbig = require('../index');
          var result = JSONbig.parse(input);
          expect(result).to.be.instanceof(BigNumber);
          expect(result.toString()).to.equal(expected);
          done();
        });
    })

});
