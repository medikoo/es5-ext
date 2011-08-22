// Prefix string with other string

'use strict';

var f = require('../Function/functionalize');

module.exports = f(function (prefix) {
	return prefix + this;
});
