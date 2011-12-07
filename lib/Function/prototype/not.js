// Returns a function that returns true when fn() returns falsy.
// f.not()(args…) =def  !f(args…)
//
// Inspired by http://osteele.com/sources/javascript/functional/

'use strict';

var apply          = Function.prototype.apply
  , assertCallable = require('../../Object/assert-callable');

module.exports = function () {
	var fn = this;
	assertCallable(fn);
	return function () {
		return !apply.call(fn, this, arguments);
	};
};
