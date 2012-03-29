// Returns a function that swaps its first two arguments before passing them to
// the underlying function.
// flip(f)(a, b, c…) =def  f(b, a, c…)
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var apply          = Function.prototype.apply
  , assertCallable = require('../../Object/assert-callable')
  , toArray        = require('../../Object/to-array');

module.exports = function () {
	var fn = this;
	assertCallable(fn);
	return function (a, b) {
		var args = toArray(arguments);
		args[0] = b;
		args[1] = a;
		return apply.call(fn, this, args);
	};
};
