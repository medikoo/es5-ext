'use strict';

var isInteger = require('../is-integer/shim')

  , abs = Math.abs, maxValue = Math.pow(2, 53) - 1;

module.exports = function (value) {
	if (!isInteger(value)) return false;
	return abs(value) <= maxValue;
};
