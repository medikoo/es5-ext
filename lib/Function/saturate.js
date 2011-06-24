// Returns a function that applies the underlying function to args, and ignores
// its own arguments.
// saturate(fn, args…)(args2…) =def  fn(args…)
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var slice = require('../List/slice').call;

module.exports = function (fn) {
	var args = slice(arguments, 1);
	return function () {
		return fn.apply(this, args);
	};
};
