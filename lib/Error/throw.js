// Throw error

'use strict';

var f = require('../Function/functionalize');

module.exports = f(function () {
	throw this;
});
