// Pad given number with zeros. Returns string

'use strict';

var memoize = require('../Function/memoize')
  , pad     = require('../String/pad').bind('0');

module.exports = memoize(function (length, precision) {
	var fn = pad(length + (precision ? (1 + precision) : 0)).call;
	return function () {
		return fn(precision ? this.toFixed(precision) : this);
	};
}, [Number, Number]);
