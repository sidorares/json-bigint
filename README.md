json-bigint
===========

JSON.parse/stringify with bigints support. Based on Douglas Crockford [JSON.js](https://github.com/douglascrockford/JSON-js) package and [bignumber.js](https://github.com/MikeMcl/bignumber.js) library.

==========

example:

```js
var JSON = require('json-bigint');

var r = JSON.parse('{ "value" : 9223372036854775807 }');

console.log(r.value.toString());
```

### Links:
- [Is there any proper way to parse JSON with large numbers? (long, bigint, int64)](http://stackoverflow.com/questions/18755125/node-js-is-there-any-proper-way-to-parse-json-with-large-numbers-long-bigint)
- [What is JavaScript's Max Int? What's the highest Integer value a Number can go to without losing precision?](http://stackoverflow.com/questions/307179/what-is-javascripts-max-int-whats-the-highest-integer-value-a-number-can-go-t)
