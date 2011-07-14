// Whether objects are of same type

'use strict';

var f        = require('../Function/functionalize')
  , toString = require('./to-string').call;

module.exports = f(function (x) {
	if (typeof this !== 'object') {
		return ((typeof this) === (typeof x));
	} else if (this === null) {
		return x === null;
	} else {
		return !!(Object.getPrototypeOf(this).isPrototypeOf(x)
			&& (toString(this) === toString(x)));
	}
});
