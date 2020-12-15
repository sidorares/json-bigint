var mocha = require('mocha')
  , assert = require('chai').assert
  , expect = require('chai').expect
  , BigNumber = require('bignumber.js')
  ;

describe("Testing native BigInt support: parse", function () {
  if (typeof (BigInt) === 'undefined') {
    console.log('No native BigInt');
    return;
  }
  var input = '{"big":92233720368547758070,"small":123}';

  it("Should show JSONbig does support parsing native BigInt", function (done) {
    var JSONbig = require('../index')({
      "useNativeBigInt": true
    });
    var obj = JSONbig.parse(input);
    expect(obj.small, "small int").to.equal(123);
    expect(obj.big.toString(), "big int").to.equal("92233720368547758070");
    expect(typeof obj.big, "big int").to.equal('bigint');
    done();
  });

  it("Should show JSONbig does support forced parsing to native BigInt", function (done) {
    var JSONbig = require('../index')({
      "alwaysParseAsBig": true,
      "useNativeBigInt": true
    });
    var obj = JSONbig.parse(input);
    expect(obj.big.toString(), "big int").to.equal("92233720368547758070");
    expect(typeof obj.big, "big int").to.equal('bigint');
    expect(obj.small.toString(), "small int").to.equal("123");
    expect(typeof obj.small, "small int").to.equal('bigint');
    done();
  });


  it("Should show JSONbig does support native Bigint parse/stringify roundtrip", function (done) {
    var JSONbig = require('../index')({
      "useNativeBigInt": true
    });
    var obj = JSONbig.parse(input);
    var output = JSONbig.stringify(obj);
    expect(output).to.equal(input);
    done();
  });

  it("Should show JSONbig does support native Bigint parse/stringify roundtrip when BigInt is forced", function (done) {
    var JSONbig = require('../index')({
      "alwaysParseAsBig": true,
      "useNativeBigInt": true
    });
    var obj = JSONbig.parse(input);
    var output = JSONbig.stringify(obj);
    expect(output).to.equal(input);
    done();
  });

  it("Uses custom parser if provided", function(done) {
    var JSONbig = require('../index')({
      numberParser: str => str + " 14eeda86-0b52-4c63-845f-4b0a60fb667b"
    });
    var obj = JSONbig.parse(input);
    var output = JSONbig.stringify(obj);
    expect(output).to.equal('{"big":"92233720368547758070 14eeda86-0b52-4c63-845f-4b0a60fb667b","small":"123 14eeda86-0b52-4c63-845f-4b0a60fb667b"}');
    done();
  });
});