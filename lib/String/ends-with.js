// Whether strings ends with given string

'use strict';

var f = require('../Function/functionalize');

module.exports = f(function (needle) {
	return this.lastIndexOf(needle) === (this.length - needle.length);
});
