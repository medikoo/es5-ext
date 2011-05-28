// Returns a function that applies the first function to the result of the
// second, but passes all its arguments too.
// S(f, g)(args…) =def  f(g(args…), args…)
//
// inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var toArray = require('../List/toArray').call;

module.exports = function (f, g) {
	return function () {
		return f.apply(this,
			[g.apply(this, arguments)].concat(toArray(arguments)));
	};
};
