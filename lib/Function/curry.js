// Returns a function that, applied to an argument list arg2, applies the
// underlying function to args ++ arg2.
// curry(f, args1…)(args2…) =def  f(args1…, args2…)
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var toArray = require('../List/to-array').call
  , slice = require('../List/slice').call;

module.exports = function (f) {
	var args = slice(arguments, 1);
	return function () {
		return f.apply(this, args.concat(toArray(arguments)));
	};
};
