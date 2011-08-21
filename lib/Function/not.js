// Returns a function that returns true when fn() returns false.
// f.not()(args…) =def  !f(args…)
//
// Inspired by http://osteele.com/sources/javascript/functional/

'use strict';

var f = require('./functionalize');

module.exports = f(function () {
	var fn = this;
	return function () {
		return !fn.apply(this, arguments);
	};
});
