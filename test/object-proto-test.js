const makeJSON = require('../index.js');
const expect = require('chai').expect;

describe('objectProto option', function(){
    it("should parse objects as Object instances if 'objectProto' set to true", function(done){
        const JSONbigObjectProto = makeJSON({ objectProto: true });
        var json_with_object = '{ "foo": { "bar": "baz" }}';
        var result = JSONbigObjectProto.parse(json_with_object);
        expect(result instanceof Object).to.be.true;
        expect(result['foo'] instanceof Object).to.be.true;
        done();
    });

    it("should parse objects as null-prototype objects if 'objectProto' set to false", function(done){
        const JSONbigNullProto = makeJSON({ objectProto: false });
        var json_with_object = '{ "foo": { "bar": "baz" }}';
        var result = JSONbigNullProto.parse(json_with_object);
        expect(result.__proto__).to.be.undefined;
        expect(result['foo'].__proto__).to.be.undefined;
        done();
    });
});
