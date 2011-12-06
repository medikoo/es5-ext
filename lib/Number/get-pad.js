// Pad given number with zeros. Returns string

'use strict';

var memoize = require('../Function/memoize')
  , getPad  = require('../String/get-pad');

module.exports = memoize(function (length, precision) {
	var fn = getPad('0', length + (precision ? (1 + precision) : 0));
	return function () {
		return fn.call(precision ? this.toFixed(precision) : this);
	};
}, [Number, Number]);
