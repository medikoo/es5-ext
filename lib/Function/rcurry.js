// Right curry. Returns a function that, applied to an argument list args2,
// applies the underlying function to args2 + args1.
//
// rcurry(f, args1…)(args2…) =def  f(args2…, args1…)
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var f       = require('./functionalize')
  , concat  = require('../List/concat').call
  , toArray = require('../List/to-array').call;

module.exports = f(function () {
	var fn = this
	  , args = toArray(arguments);
	return function () {
		return fn.apply(this, concat(arguments, args));
	};
});
