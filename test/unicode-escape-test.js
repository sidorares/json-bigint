var mocha = require('mocha')
  , expect = require('chai').expect
  ;

describe("Testing unicode escape parsing", function () {
  var JSONbig = require('../index');

  it("Should reject a \\u escape with fewer than 4 hex digits, like native JSON.parse", function (done) {
    expect(() => JSON.parse('"\\u00ZZ"')).to.throw();
    expect(() => JSONbig.parse('"\\u00ZZ"')).to.throw('Bad string');
    expect(() => JSONbig.parse('"\\uABXY"')).to.throw('Bad string');
    done();
  });

  it("Should still parse a valid 4-hex-digit \\u escape", function (done) {
    expect(JSONbig.parse('"\\u0041"')).to.equal('A');
    expect(JSONbig.parse('"\\u00e9"')).to.equal('é');
    done();
  });
});
