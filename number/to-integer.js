'use strict';

module.exports = function (value) {
	value = Number(value);
	if (value === -Infinity || value === Infinity) return value;
	return value | 0;
};
