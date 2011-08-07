// Returns a function that, applied to an argument list arg2, applies the
// underlying function to args ++ arg2.
// curry(f, args1…)(args2…) =def  f(args1…, args2…)
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var f       = require('./functionalize')
  , concat  = require('../List/concat').call
  , toArray = require('../List/to-array').call;

module.exports = f(function () {
	var fn   = this
	  , args = arguments;
	return function () {
		return fn.apply(this, concat(args, toArray(arguments)));
	};
});
