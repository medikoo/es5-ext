// Converts value to unsigned integer

'use strict';

var max       = Math.max
  , toInteger = require('./to-integer');

module.exports = function (value) {
	return max(0, toInteger(value));
};
