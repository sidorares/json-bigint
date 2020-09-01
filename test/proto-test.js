const makeJSON = require('../index.js');
const expect = require('chai').expect;
describe('__proto__ and constructor assignment', function () {
  it('should set __proto__ property but not a prototype if protoAction is set to preserve', () => {
    const JSONbig = makeJSON({ protoAction: 'preserve' });
    const obj1 = JSONbig.parse('{ "__proto__": 1000000000000000 }');
    expect(Object.getPrototypeOf(obj1)).to.equal(null);
    const obj2 = JSONbig.parse('{ "__proto__": { "admin": true } }');
    expect(obj2.admin).to.not.equal(true);
  });

  it('should throw an exception if protoAction set to invalid value', () => {
    expect(() => {
      makeJSON({ protoAction: 'invalid value' });
    }).to.throw(
      'Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed invalid value'
    );
  });

  it('should throw an exception if constructorAction set to invalid value', () => {
    expect(() => {
      makeJSON({ constructorAction: 'invalid value' });
    }).to.throw(
      'Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed invalid value'
    );
  });

  it('should throw an exception if protoAction set to error and there is __proto__ property', () => {
    const JSONbig = makeJSON({ protoAction: 'error' });
    expect(() =>
      JSONbig.parse('{ "\\u005f_proto__": 1000000000000000 }')
    ).to.throw('Object contains forbidden prototype property');
  });

  it('should throw an exception if constructorAction set to error and there is constructor property', () => {
    const JSONbig = makeJSON({ protoAction: 'error' });
    expect(() => JSONbig.parse('{ "constructor": 1000000000000000 }')).to.throw(
      'Object contains forbidden constructor property'
    );
  });

  it('should ignore __proto__ property if protoAction is set to ignore', () => {
    const JSONbig = makeJSON({ protoAction: 'ignore' });
    const obj1 = JSONbig.parse(
      '{ "__proto__": 1000000000000000, "a" : 42, "nested": { "__proto__": false, "b": 43 } }'
    );
    expect(Object.getPrototypeOf(obj1)).to.equal(null);
    expect(obj1).to.deep.equal({ a: 42, nested: { b: 43 } });
  });

  it('should ignore constructor property if constructorAction is set to ignore', () => {
    const JSONbig = makeJSON({ constructorAction: 'ignore' });
    const obj1 = JSONbig.parse(
      '{ "constructor": 1000000000000000, "a" : 42, "nested": { "constructor": false, "b": 43 } }'
    );
    expect(obj1).to.deep.equal({ a: 42, nested: { b: 43 } });
  });
});
