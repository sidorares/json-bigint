var assert = require('assert');
var JSONbig = require('../index');

describe('Parser errors', function () {
  var cases = [
    { input: '', message: "Unexpected ''", at: 1 },
    { input: '{', message: 'Bad object', at: 2 },
    { input: '[', message: 'Bad array', at: 2 },
    { input: '"unterminated', message: 'Bad string', at: 14 },
    { input: '"\\q"', message: 'Bad string', at: 3 },
    { input: 'tru', message: "Expected 'e' instead of ''", at: 4 },
    { input: '[true false]', message: "Expected ',' instead of 'f'", at: 7 },
    { input: '{"a" true}', message: "Expected ':' instead of 't'", at: 6 },
    { input: '1e+', message: 'Bad number', at: 4 },
    { input: '1e999', message: 'Bad number', at: 6 },
    { input: 'true false', message: 'Syntax error', at: 6 },
    {
      input: '{"a":true,"a":false}',
      options: { strict: true },
      message: 'Duplicate key "a"',
      at: 15,
    },
    {
      input: '{"__proto__":true}',
      message: 'Object contains forbidden prototype property',
      at: 14,
    },
    {
      input: '{"constructor":true}',
      message: 'Object contains forbidden constructor property',
      at: 16,
    },
  ];

  cases.forEach(function (testCase) {
    it('provides a SyntaxError with diagnostics for ' + JSON.stringify(testCase.input), function () {
      var parser = JSONbig(testCase.options);

      function parseInvalidInput() {
        parser.parse(testCase.input);
      }

      assert.throws(parseInvalidInput, function (error) {
        assert(error instanceof SyntaxError);
        assert(error instanceof Error);
        assert.strictEqual(typeof error.stack, 'string');
        assert(error.stack.indexOf('parseInvalidInput') !== -1);
        assert(error.stack.indexOf(testCase.message) !== -1);
        assert.strictEqual(error.toString(), 'SyntaxError: ' + testCase.message);
        assert.deepStrictEqual(Object.keys(error).sort(), ['at', 'message', 'name', 'text']);
        assert.deepStrictEqual(JSON.parse(JSON.stringify(error)), {
          name: 'SyntaxError',
          message: testCase.message,
          at: testCase.at,
          text: testCase.input,
        });
        return true;
      });
    });
  });

  it('reports errors from the default parser as SyntaxError', function () {
    assert.throws(function () { JSONbig.parse('{'); }, SyntaxError);
  });

  it('preserves exceptions thrown by a reviver', function () {
    var failure = new Error('reviver failed');
    assert.throws(function () {
      JSONbig.parse('{"valid":true}', function () { throw failure; });
    }, function (error) { return error === failure; });
  });

  it('preserves exceptions thrown when coercing the input', function () {
    var failure = new Error('input coercion failed');
    assert.throws(function () {
      JSONbig.parse({ toString: function () { throw failure; } });
    }, function (error) { return error === failure; });
  });

  it('can parse valid JSON after reporting a syntax error', function () {
    var parser = JSONbig();
    assert.throws(function () { parser.parse('['); });
    assert.deepStrictEqual(parser.parse('[true,null,"text"]'), [true, null, 'text']);
  });
});
