// Right curry. Returns a function that, applied to an argument list args2,
// applies the underlying function to args2 + args1.
//
// rcurry(f, args1…)(args2…) =def  f(args2…, args1…)
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var apply          = Function.prototype.apply
  , assertCallable = require('../../Object/assert-callable')
  , toArray        = require('../../Object/prototype/to-array');

module.exports = function () {
	var fn, args;
	assertCallable(fn = this);
	args = toArray.call(arguments);
	return function () {
		return apply.call(fn, this, toArray.call(arguments).concat(args));
	};
};
