var JSONbig = require('./index.js');

var json = '{ "value" : 9223372036854775807, "v2": 123 }';

console.log('Input:', json);

var r = JSON.parse(json);
var r1 = JSONbig.parse(json);
var r2 = JSONbig.parse(json, true);

console.log('\nnode.js bult-in JSON:');
console.log('JSON.parse(input).value.toString(): ', r.value);
console.log('JSON.stringify(JSON.parse(input)):', JSON.stringify(r));

console.log('\nbig number JSON:');
console.log('JSONbig.parse(input).value.toString(): ', r1.value.toString());
console.log('JSONbig.stringify(JSONbig.parse(input)):', JSONbig.stringify(r1));
console.log('JSON.stringify(JSONbig.parse(input)):', JSON.stringify(r1));

console.log('\nbig number JSON with default reviver:');
console.log('JSONbig.parse(input, true).value.toString(): ', r2.value.toString());
console.log('JSONbig.stringify(JSONbig.parse(input, true)):', JSONbig.stringify(r2));
console.log('JSON.stringify(JSONbig.parse(input, true)):', JSON.stringify(r2));
