true-json-bigint
===========

[![Build Status](https://travis-ci.org/SebastianG77/json-bigint.svg?branch=master)](https://travis-ci.org/SebastianG77/json-bigint)
[![NPM](https://nodei.co/npm/true-json-bigint.png?downloads=true&stars=true)](https://nodei.co/npm/true-json-bigint/)

This is a module for parsing JSON strings to JSON objects and stringifying JSON objects to JSON strings. It is a fork of [json-bigint 0.3.0](https://www.npmjs.com/package/json-bigint/v/0.3.0), but enhances the original module in the following aspects. 

1. It is possible to parse JSON strings containing numeric values larger than 1.797693134862315E+308. The module json-bigint 0.3.0 will throw the error "Bad number" in such cases.
2. This module has a proper support for scientific notation. The original module will parse values like 1e+100 to numeric values as its string representation has less than 15 characters. This handling results in an inapproriate casting of integer values that are larger than 2<sup>53</sup> - 1 and written in scientific notation. With true-json-bigint the length of the floating point representation will be used to determine the length of the number. This change ensures that all numeric values written in scientific notation will be parsed to to big number objects when necessary.

The module generally works in the same way as the original one. So use the following command to install it into your application:

```
$ npm install true-json-bigint
```

Parse JSON strings as described in the next example:

```
var JSONbig = require('true-json-bigint');

var json = '{"smallNumber": 1, "bigNumber" : 987654321123456789987654321}';

JSONbig.parse(json);

console.log(json); // {"smallNumber": 1, "bigNumber" : 987654321123456789987654321}

```

As can be seen in the following example, stringifying a JSON object that contains a big number can easily be done by using the stringify function of this module.

```
var JSONbig = require('true-json-bigint');
const BigNumber = require('bignumber.js');

var json = {}
json.smallNumber = 1
json.bigNumber = BigNumber('987654321123456789987654321');

const result = JSONbig.stringify(json);

console.log(result); // {"smallNumber":1,"bigNumber":9.87654321123456789987654321e+26}

```

See the README of [json-bigint 0.3.0](https://www.npmjs.com/package/json-bigint/v/0.3.0) for further details on how to use this module.
