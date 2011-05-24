// Returns a function that swaps its first two arguments before passing them to
// the underlying function.
// f.flip()(a, b, c…) =def  f(b, a, c…)
//
// inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var a;
module.exports = function (f) {
	return function () {
		a = arguments[0];
		arguments[0] = arguments[1]; arguments[1] = a;
		return f.apply(this, arguments);
	};
};
