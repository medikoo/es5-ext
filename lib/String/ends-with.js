// Whether strings ends with given string

'use strict';

var f = require('../Function/functionalize');

module.exports = f(function (needle) {
	var index = this.lastIndexOf(needle);
	return (index !== -1) && (index === (this.length - needle.length));
});
