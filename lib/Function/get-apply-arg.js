// Return f.apply binded to f with scope resolved to scope of final function call
//
// bindApplyArgs(f)(args) =def f.apply(null, args);

'use strict';

var f = require('../Function/functionalize');

module.exports = f(function () {
	var fn = this;
	return function (args) {
		return fn.apply(this, args);
	};
});
