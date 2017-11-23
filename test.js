var JSONbig = require('./index');
var JSONbigFloats = require('./index')({"strictFloatHints": true});
var key = '{ "key": '1234567890123456789012345.000' }';
console.log('\n\nAlways interpreting decimal numbers as floats, instead of a BigNumber');
console.log('Input:', key);
var withStrictFloatHints = JSONbigFloats.parse(key);
var asNormal = JSONbig.parse(key);
console.log('Default type: %s, With option type: %s', typeof asNormal.key, typeof withStrictFloatHints.key);
