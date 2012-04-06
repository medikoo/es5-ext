// Pad given number with zeros. Returns string

'use strict';

var assertNotNull = require('../assert-not-null')
  , memoize       = require('../Function/memoize')
  , getPad        = require('../String/get-pad');

module.exports = memoize(function (length, precision) {
	var fn;

	assertNotNull(length);
	length = length >>> 0;
	precision = precision >>> 0;

	fn = getPad('0', length + (precision ? (1 + precision) : 0));
	return function () {
		return fn.call(precision ? this.toFixed(precision) : this);
	};
}, [Number, Number]);
