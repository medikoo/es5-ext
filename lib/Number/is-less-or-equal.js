// Returns true if the subject number is less than or equal to the other number

'use strict';

var f = require('../Function/functionalize');

module.exports = f(function (n) {
	return this <= n;
});
