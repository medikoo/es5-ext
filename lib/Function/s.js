// Returns a function that applies the first function to the result of the
// second, but passes all its arguments too.
// s(f, g)(args…) =def  f(g(args…), args…)
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var toArray = require('../List/to-array').call;

module.exports = function (f, g) {
	return function () {
		return f.apply(this,
			[g.apply(this, arguments)].concat(toArray(arguments)));
	};
};
