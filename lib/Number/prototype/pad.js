'use strict';

var toFixed = Number.prototype.toFixed
  , value   = require('../../Object/valid-value')
  , pad     = require('../../String/prototype/pad')
  , toInt   = require('../to-int');

module.exports = function (length, precision) {
	var fn;
	length = toInt(value(length));
	precision = toInt(precision);

	return pad.call(precision ? toFixed.call(this, precision) : this,
		'0', length + (precision ? (1 + precision) : 0));
};
