// Removes all falsy values.
//
// Inspired by: http://documentcloud.github.com/underscore/#compact

'use strict';

var f = require('../Function/functionalize');

module.exports = f(function () {
	var i = this.length - 1;
	for (; i >= 0; --i) {
		if (!this[i]) {
			this.splice(i, 1);
		}
	}
	return this;
});
