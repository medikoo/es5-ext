// Better compare function
// Reduces objects with valueOf if object is still not primitive then it's
// reduced with toString.
// Result primitives are compared as numbers if they're numbers and as strings
// if they're strings

'use strict';

var keys         = Object.keys
	, f            = require('../Function/functionalize')
  , isPrimitive  = require('../is-primitive')
  , isString     = require('../String/is-string')

  , resolve;

resolve = function (a) {
	if (!isPrimitive(a)) {
		a = a.valueOf();
		if (!isPrimitive(a)) {
			a = a.toString();
		}
	}
	return a;
};

module.exports = f(function (other) {
	var a = this, b = other;
	if (a === b) {
		return 0;
	}
	a = resolve(a), b = resolve(b);
	if (a === b) {
		return 0;
	}
	if (isString(a) && isString(b)) {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	} else {
		return (a > b) ? 1 : ((a < b) ? -1 : 0);
	}
});
