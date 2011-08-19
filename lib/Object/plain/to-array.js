// Returns object keys and values in array
// Array can be two dimensional (every key and value is separate array) or flat
// keys and values are placed alternately
//
// To get array of values see values.js, to get array of keys use Object.keys

'use strict';

var f       = require('../../Function/functionalize')
  , forEach = require('./for-each').call

  , fn, multi, flat;

fn = function (fn) {
	return function () {
		var r = [];
		forEach(this, fn.bind(r));

		return r;
	};
};

multi = f(fn(function (value, key) {
	this.push([key, value]);
}));

flat = f(fn(function (value, key) {
	this.push(key, value);
}));

module.exports = function (doflat) {
	return doflat ? flat : multi;
};
