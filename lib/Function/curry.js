// Returns a function that, applied to an argument list arg2, applies the
// underlying function to args ++ arg2.
// f.curry(args1…)(args2…) =def  f(args1…, args2…)
//
// inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var toArray = require('../Array/toArray');
var slice = require('../Array/slice');

module.exports = function (f) {
	var args = slice(arguments, 1);
	return function () {
		return f.apply(this, args.concat(toArray(arguments)));
	};
};
