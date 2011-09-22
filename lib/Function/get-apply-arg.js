// Return function that will be applied with first argument as it's arguments
//
// getApplyArgs(f)(args) =def f.apply(null, args);

'use strict';

var f = require('../Function/functionalize');

module.exports = f(function () {
	var fn = this;
	return function (args) {
		return fn.apply(this, args);
	};
});
