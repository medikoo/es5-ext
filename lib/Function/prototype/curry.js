// Returns a function that, applied to an argument list arg2, applies the
// underlying function to args ++ arg2.
// curry(f, args1…)(args2…) =def  f(args1…, args2…)
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var toArray = require('../../Array/to-array');

module.exports = function () {
	var fn   = this
	  , args = toArray(arguments);
	return function () {
		return fn.apply(this, args.concat(toArray(arguments)));
	};
};
