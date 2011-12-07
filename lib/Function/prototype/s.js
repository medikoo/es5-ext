// Returns a function that applies the first function to the result of the
// second, but passes all its arguments too.
// s(f, g)(args…) =def  f(g(args…), args…)
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var apply          = Function.prototype.apply
  , assertCallable = require('../../Object/assert-callable')
  , toArray        = require('../../Object/prototype/to-array');

module.exports = function (g) {
	var fn = this;
	assertCallable(fn);
	assertCallable(g);
	return function () {
		return apply.call(fn, this,
			[apply.call(g, this, arguments)].concat(toArray.call(arguments)));
	};
};
