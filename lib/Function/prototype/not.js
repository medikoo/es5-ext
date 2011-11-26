// Returns a function that returns true when fn() returns falsy.
// f.not()(args…) =def  !f(args…)
//
// Inspired by http://osteele.com/sources/javascript/functional/

'use strict';

module.exports = function () {
	var fn = this;
	return function () {
		return !fn.apply(this, arguments);
	};
};
