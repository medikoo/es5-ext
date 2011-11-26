// Checks whether value is number and not NaN

'use strict';

module.exports = function (value) {
	return !isNaN(Number(value));
};
