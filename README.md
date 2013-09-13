json-bigint
===========

JSON.parse/stringify with bigints support. Based on Douglas Crockford [JSON.js](https://github.com/douglascrockford/JSON-js) package and [bignumber.js](https://github.com/MikeMcl/bignumber.js) library.

==========

example:

```js
var JSONbig = require('json-bigint');

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
```

Output:

```
Input: { "value" : 9223372036854775807, "v2": 123 }

node.js bult-in JSON:
JSON.parse(input).value :  9223372036854776000
JSON.stringify(JSON.parse(input)): {"value":9223372036854776000,"v2":123}


big number JSON:
JSON.parse(input).value :  9223372036854775807
JSON.stringify(JSON.parse(input)): {"value":9223372036854775807,"v2":123}
```

### Links:
- [RFC4627: The application/json Media Type for JavaScript Object Notation (JSON)](http://www.ietf.org/rfc/rfc4627.txt)
- [Re: \[Json\] Limitations on number size?](http://www.ietf.org/mail-archive/web/json/current/msg00297.html)
- [Is there any proper way to parse JSON with large numbers? (long, bigint, int64)](http://stackoverflow.com/questions/18755125/node-js-is-there-any-proper-way-to-parse-json-with-large-numbers-long-bigint)
- [What is JavaScript's Max Int? What's the highest Integer value a Number can go to without losing precision?](http://stackoverflow.com/questions/307179/what-is-javascripts-max-int-whats-the-highest-integer-value-a-number-can-go-t)
- [Large numbers erroneously rounded in Javascript](http://stackoverflow.com/questions/1379934/large-numbers-erroneously-rounded-in-javascript)
