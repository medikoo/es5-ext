// Returns a function that applies the underlying function to args, and ignores
// its own arguments.
// lock(fn, args…)(args2…) =def  fn(args…)
//
// Inspired by: http://osteele.com/sources/javascript/functional/
// Naming took from Google's closure

'use strict';

var apply          = Function.prototype.apply
  , assertCallable = require('../../Object/assert-callable');

module.exports = function () {
	var fn, args;
	assertCallable(fn = this);
	args = arguments;
	return function () {
		return apply.call(fn, this, args);
	};
};
