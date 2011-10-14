// some, starting from last element

'use strict';

var f = require('../Function/functionalize');

module.exports = f(function (fn, scope) {
	scope = scope || this;
	for (var i = this.length; i >= 0; --i) {
		if (this.hasOwnProperty(i) && fn.call(scope, this[i], i, this)) {
			return true;
		}
	}
	return false;
});
