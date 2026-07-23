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

    it("Should show JSONbig does support bigint parse/stringify roundtrip", function(done){
        var JSONbig = require('../index');
        var obj = JSONbig.parse(input);
        expect(obj.small.toString(), "string from small int").to.equal("123");
        expect(obj.big.toString(), "string from big int").to.equal("9223372036854775807");
        expect(obj.big, "instanceof big int").to.be.instanceof(BigNumber);

        var output = JSONbig.stringify(obj);
        expect(output).to.equal(input);
        done();
    });

    it('Should not walk BigNumber internals when a reviver is passed', function (done) {
        var JSONbig = require('../index');
        var input = '{"big": 20000000000000000000}';
        var keys = [];
        var result = JSONbig.parse(input, function (k, v) {
            keys.push(k);
            return v;
        });
        // the reviver must receive the number as a single leaf value, not the
        // BigNumber's internal fields (s, e, c)
        expect(keys).to.deep.equal(['big', '']);
        expect(result.big.toString()).to.equal('20000000000000000000');
        done();
    });
});
