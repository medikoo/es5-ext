'use strict';

var f = require('../Function/functionalize');

module.exports = f(function (other) {
	return this == other;
});
