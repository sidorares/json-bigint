var JSON = require('./index.js');

var r = JSON.parse('{ "value" : 9223372036854775807 }');

console.log(r.value.toString());
