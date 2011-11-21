// Checks whether value is number and not NaN

'use strict';

var isNumber = require('./is-number');

module.exports = function (value) {
	return isNumber(value) && !isNaN(value);
}
