// Return f.apply binded to f with scope resolved to scope of final function call
//
// bindApplyArgs(f)(args) =def f.apply(null, args);

'use strict';

module.exports = function (fn) {
	return function (args) {
		return fn.apply(this, args);
	};
};
