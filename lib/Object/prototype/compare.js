// Universal compare function
// Reduces objects with valueOf if object is still not primitive then it's
// reduced with toString.
// Result primitives are compared as numbers if they're numbers and as strings
// if they're strings

'use strict';

var keys         = Object.keys
  , isString     = require('../../String/is-string')
  , strCompare   = require('../../String/prototype/case-insensitive-compare')
  , isPrimitive  = require('../../is-primitive')

  , resolve, typeMap;

typeMap = {
	undefined: 0,
	object: 1,
	'boolean': 2,
	string: 3,
	number: 4
};

resolve = function (a) {
	if (!isPrimitive(a)) {
		a = a.valueOf();
		if (!isPrimitive(a)) {
			a = a.toString();
		}
	}
	return a;
};

module.exports = function (other) {
	var a = this, b = other;
	if (a === b) {
		// Same
		return 0;
	}
	a = resolve(a), b = resolve(b);
	if (a == b) {
		return typeMap[typeof a] - typeMap[typeof b];
	} else if (a == null) {
		return -1;
	} else if (b == null) {
		return 1;
	} else if ((typeof a === 'string') || (typeof b === 'string')) {
		return strCompare.call(a, b);
	} else {
		return Number(a) - Number(b);
	}
};
