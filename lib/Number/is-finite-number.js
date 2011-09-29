// Whether given value is number and is finite

'use strict';

var isNumber = require('./is-number');

module.exports = function (x) {
	return isNumber(x) && isFinite(x);
};
