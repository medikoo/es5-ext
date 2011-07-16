// Right curry. Returns a function that, applied to an argument list args2,
// applies the underlying function to args2 + args1.
//
// rcurry(f, args1…)(args2…) =def  f(args2…, args1…)
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var concat = require('../List/concat').call
  , slice  = require('../List/slice').call;

module.exports = function (f) {
	var args = slice(arguments, 1);
	return function () {
		return f.apply(this, concat(arguments, args));
	};
};
