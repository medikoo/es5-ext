// Pad given number with zeros. Returns string

'use strict';

var assertNotNull = require('../assert-not-null')
  , memoize       = require('../Function/memoize')
  , getPad        = require('../String/get-pad')
  , toInteger     = require('./to-integer');

module.exports = memoize(function (length, precision) {
	var fn;

	fn = getPad('0', length + (precision ? (1 + precision) : 0));
	return function () {
		return fn.call(precision ? this.toFixed(precision) : this);
	};
}, [[assertNotNull, toInteger], toInteger]);
