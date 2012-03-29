// Returns a function that, applied to an argument list arg2, applies the
// underlying function to args ++ arg2.
// partial(f, args1…)(args2…) =def  f(args1…, args2…)

'use strict';

var apply          = Function.prototype.apply
  , assertCallable = require('../../Object/assert-callable')
  , toArray        = require('../../Object/to-array');

module.exports = function () {
	var fn, args;
	assertCallable(fn = this);
	args = toArray(arguments);
	return function () {
		return apply.call(fn, this, args.concat(toArray(arguments)));
	};
};
