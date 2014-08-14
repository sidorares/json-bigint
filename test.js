var JSONbig = require('./index.js');

var json = '{ "value" : 9223372036854775807, "v2": 123 }';
console.log('Input:', json);
console.log('');

console.log('node.js bult-in JSON:')
var r = JSON.parse(json);
console.log('JSON.parse(input).value : ', r.value.toString());
console.log('JSON.stringify(JSON.parse(input)):', JSON.stringify(r));

console.log('\n\nbig number JSON:');
var r1 = JSONbig.parse(json);
console.log('JSON.parse(input).value : ', r1.value.toString());
console.log('JSON.stringify(JSON.parse(input)):', JSONbig.stringify(r1));
console.log('');


var dupkeys = '{ "dupkey": "value 1", "dupkey": "value 2"}';
console.log('\n\nDuplicate Key test with big number JSON');
console.log('Input:', dupkeys);
var works = JSONbig.parse(dupkeys);
console.log('JSON.parse(dupkeys).dupkey: %s', works.dupkey);
var fails = "will stay like this";
try {
    fails = JSONbig.parse(dupkeys, {"lenient": false});
    console.log('ERROR!! Should never get here');
} catch (e) {
    console.log('Succesfully catched expected exception on duplicate keys: %j', e);
}

console.log('');
