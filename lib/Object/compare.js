// Better compare function
// Reduces objects with valueOf if object is still not primitive then it's
// reduced with toString.
// Result primitives are compared as numbers if they're numbers and as strings
// if they're strings

'use strict';

var keys         = Object.keys
	, f            = require('../Function/functionalize')
  , isString     = require('../String/is-string')
  , strCompare   = require('../String/locale-compare-insensitive').call
  , isPrimitive  = require('../is-primitive')

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
	if (a == b) {
		return 0;
	}
	if (a == null) {
		return -1;
	} else if (b == null) {
		return 1;
	} else if (isString(a) || isString(b)) {
		if (!isString(a)) {
			a = a.toString();
		} else {
			b = b.toString();
		}
		return strCompare(a, b);
	} else {
		return Number(a) - Number(b);
	}
});
