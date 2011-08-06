// Whether strings starts with given string

'use strict';

var f = require('../Function/functionalize');

module.exports = f(function (needle) {
	return this.indexOf(needle) === 0;
});
