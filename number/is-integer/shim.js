'use strict';

var toInteger = require('../to-int');

module.exports = function (value) {
	if (typeof value !== 'number') return false;
	if (!isFinite(value)) return false;
	return toInteger(value) === value;
};
