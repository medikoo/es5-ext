// Returns true if the subject number is less than the other number

'use strict';

var f = require('../Function/functionalize');

module.exports = f(function (n) {
	return this < n;
});
