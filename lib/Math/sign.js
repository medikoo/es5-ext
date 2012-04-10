// To be ES6 standard
// Returns sign of a number value

'use strict'

module.exports = function (value) {
	value = Number(value);
	if (isNaN(value) || (value === 0)) {
		return value;
	}
	return (value > 0) ? 1 : -1;
};
