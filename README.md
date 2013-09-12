json-bigint
===========

JSON.parse/stringify with bigints support. Based on Douglas Crockford (JSON.js)(https://github.com/douglascrockford/JSON-js) package and (bignumber.js)[https://github.com/MikeMcl/bignumber.js] library.

==========

example:

```js
var JSON = require('json-bigint');

var r = JSON.parse('{ "value" : 9223372036854775807 }');

console.log(r.value.toString());
```
