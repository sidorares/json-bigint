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
  var input = '{"big":92233720368547758070,"small":123,"deci":1234567890.0123456,"shortExp":1.79e+308,"longExp":1.7976931348623157e+308}';

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

  it("Should show JSONbig does support decimal and scientific notation parse/stringify roundtrip", function (done) {
    var JSONbig = require('../index')({
      "useNativeBigInt": true
    });
    var obj = JSONbig.parse(input);
    expect(obj.deci.toString(), "decimal number").to.equal("1234567890.0123456");
    expect(typeof obj.deci, "decimal number").to.equal('number');
    expect(obj.shortExp.toString(), "short exponential number").to.equal("1.79e+308");
    expect(typeof obj.shortExp, "short exponential number").to.equal('number');
    expect(obj.longExp.toString(), "long exponential number").to.equal("1.7976931348623157e+308");
    expect(typeof obj.longExp, "long exponential number").to.equal('number');
    var output = JSONbig.stringify(obj);
    expect(output).to.equal(input);
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
});