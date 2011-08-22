// Prefix string with other string

'use strict';

var f = require('../Function/functionalize');

module.exports = function (prefix) {
	return f(function () {
		return prefix + this;
	});
};
