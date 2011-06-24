// Returns a function that swaps its first two arguments before passing them to
// the underlying function.
// f.flip()(a, b, c…) =def  f(b, a, c…)
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

module.exports = function (f) {
	return function (a, b) {
		var x = a;
		a = b; b = x;
		return f.apply(this, arguments);
	};
};
