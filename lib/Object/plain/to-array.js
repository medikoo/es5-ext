// Returns object keys and values in array
// Array can be two dimensional (every key and value is separate array) or flat
// keys and values are placed alternately
//
// To get array of values see values.js, to get array of keys use Object.keys

'use strict';

var f       = require('../../Function/functionalize')
  , forEach = require('./for-each').call

  , multi, flat;

multi = function (value, key) {
	this.push([key, value]);
};

flat = function (value, key) {
	this.push(key, value);
};

module.exports = f(function (doflat) {
	var r = [];
	forEach(this, doflat ? flat.bind(r) : multi.bind(r));

	return r;
});
