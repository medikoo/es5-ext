// Pad given number with zeros. Returns string

'use strict';

var valid     = require('../valid-value')
  , memoize   = require('../Function/prototype/memoize')
  , getPad    = require('../String/get-pad')
  , toInteger = require('./to-integer');

module.exports = memoize.call(function (length, precision) {
	var fn;

	fn = getPad('0', length + (precision ? (1 + precision) : 0));
	return function () {
		return fn.call(precision ? this.toFixed(precision) : this);
	};
}, [function (length) {
	return valid(length) && toInteger(length);
}, toInteger]);
