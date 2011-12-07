// Returns a function that returns true when fn() returns falsy.
// f.not()(args…) =def  !f(args…)
//
// Inspired by http://osteele.com/sources/javascript/functional/

'use strict';

var apply      = Function.prototype.apply
  , isCallable = require('../../Object/is-callable');

module.exports = function () {
	var fn = this;
	if (!isCallable(fn)) {
		throw new TypeError(fn + " is not a function");
	}
	return function () {
		return !apply.call(fn, this, arguments);
	};
};
