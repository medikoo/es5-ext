// Pad given number with zeros. Returns string

'use strict';

var toFixed = Number.prototype.toFixed
  , valid   = require('../../valid-value')
  , getPad  = require('../../String/get-pad')
  , toInt   = require('../to-int');

module.exports = function (length, precision) {
	var fn;
	length = valid(length) && toInt(length);
	precision = toInt(precision);

	return getPad('0', length + (precision ? (1 + precision) : 0))
		.call(precision ? toFixed.call(this, precision) : this);
};
