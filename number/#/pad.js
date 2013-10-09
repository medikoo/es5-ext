'use strict';

var pad   = require('../../string/#/pad')
  , toUint = require('../to-uint')

  , toFixed = Number.prototype.toFixed;

module.exports = function (length/*, precision*/) {
	var precision;
	length = toUint(length);
	precision = toUint(arguments[1]);

	return pad.call(precision ? toFixed.call(this, precision) : this,
		'0', length + (precision ? (1 + precision) : 0));
};
