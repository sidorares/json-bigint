var json_stringify = require('./lib/stringify.js').stringify;
var json_parse     = require('./lib/parse.js');

var newInstance = function(options) {
    return  {
        parse: json_parse(options),
        stringify: json_stringify
    }
};

module.exports = newInstance;

//create the default method members with no options applied for backwards compatibility
module.exports.parse = json_parse();
module.exports.stringify = json_stringify;

// for cleaner typescript API
module.exports.newInstance = newInstance;
