var assert = require('assert');
var JSONbig = require('../index');

describe('JSON number leading zeros', function () {
  [
    {},
    {storeAsString: true},
    {alwaysParseAsBig: true},
    {useNativeBigInt: true}
  ].forEach(function (options) {
    if (options.useNativeBigInt && typeof BigInt === 'undefined') return;
    var parser = JSONbig(options);
    var mode = JSON.stringify(options);

    it('rejects leading zeros in ' + mode, function () {
      ['00', '01', '-01', '00.5', '-00.5', '01e2', '-01E-2'].forEach(function (value) {
        [value, '[' + value + ']', '{"number":' + value + '}'].forEach(function (input) {
          assert.throws(function () { JSON.parse(input); });
          assert.throws(function () { parser.parse(input); }, function (error) {
            return error.name === 'SyntaxError';
          });
        });
      });
    });

    it('accepts zeros, fractions, and exponents in ' + mode, function () {
      ['0', '-0', '0.5', '-0.5', '0e01', '10e-01', '100'].forEach(function (input) {
        assert.strictEqual(String(parser.parse(input)), String(JSON.parse(input)));
      });
      assert.strictEqual(String(parser.parse('9007199254740993')), '9007199254740993');
    });
  });
});
