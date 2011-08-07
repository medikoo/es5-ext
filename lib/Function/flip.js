// Returns a function that swaps its first two arguments before passing them to
// the underlying function.
// flip(f)(a, b, c…) =def  f(b, a, c…)
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var f = require('./functionalize');

module.exports = f(function () {
	var fn = this;
	return function (a, b) {
		var x = a;
		arguments[0] = b; arguments[1] = x;
		return fn.apply(this, arguments);
	};
});
