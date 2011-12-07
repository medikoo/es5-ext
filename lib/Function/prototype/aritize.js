// Invoking the function returned by this function only passes n arguments to
// the underlying function. If the underlying function is not saturated, the
// result is a function that passes all its arguments to the underlying
// function. (That is, aritize only affects its immediate caller, and not
// subsequent calls.)
// aritize is useful to remove optional arguments from a function that is passed
// to a higher-order function that supplies different optional arguments.
//
// aritize(fn, n)(args…) =def  fn(args[0…n])
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var slice          = Array.prototype.slice
  , apply          = Function.prototype.apply
	, assertCallable = require('../../Object/assert-callable');

module.exports = function (n) {
	var fn = this;
	assertCallable(fn);
	return function () {
		return apply.call(fn, this, slice.call(arguments, 0, n));
	};
};
