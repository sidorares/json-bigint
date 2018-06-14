var mocha  = require('mocha')
  , assert = require('chai').assert
  , expect = require('chai').expect
  ;

describe("Testing 'storeAsString' option", function(){
    var key = '{ "key": 12345678901234567 }';
    var keyMaxInt = `{ "key": ${Number.MAX_SAFE_INTEGER} }`;
    var keyMinInt = `{ "key": ${Number.MIN_SAFE_INTEGER} }`;
    var keyMaxMinusInt = `{ "key": ${Number.MAX_SAFE_INTEGER - 1} }`;
    var keyMinPlusInt = `{ "key": ${Number.MIN_SAFE_INTEGER + 1} }`;

    it("Should show that the key is of type object", function(done){
        var JSONbig = require('../index');
        expect(typeof JSONbig.parse(key).key).to.equal("object");
        done();
    });

    it("Should show that key is of type string, when storeAsString option is true", function(done){
        var JSONstring = require('../index')({"storeAsString": true});
        expect(typeof JSONstring.parse(key).key).to.equal("string");
        expect(typeof JSONstring.parse(keyMaxInt).key).to.equal("string");
        expect(typeof JSONstring.parse(keyMinInt).key).to.equal("string");
        expect(typeof JSONstring.parse(keyMinPlusInt).key).to.equal("number");
        expect(typeof JSONstring.parse(keyMaxMinusInt).key).to.equal("number");
        done();
    });
});
