// To be ES6 standard
//
// Converts value to integer

'use strict';

var abs   = Math.abs
  , floor = Math.floor
  , sign  = require('../Math/sign');

module.exports = function (value) {
	if (isNaN(value)) {
		return 0;
	}
	value = Number(value);
	if ((value === 0) || !isFinite(value)) {
		return value;
	}

	return sign(value) * floor(abs(value));
};
