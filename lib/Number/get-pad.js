// Pad given number with zeros. Returns string

'use strict';

var pad = require('../String/pad').bind('0');

module.exports = function (length, precision) {
	var fn;
	length = Number(length);
	precision = Number(precision);
	fn = pad(length + (precision ? (1 + precision) : 0)).call;
	return function () {
		return fn(precision ? this.toFixed(precision) : this);
	};
};
