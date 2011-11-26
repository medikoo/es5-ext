// Match first list argument to function arguments
//
// matched(f)(args) =def f.apply(null, args);

'use strict';

module.exports = function () {
	var fn = this;
	return function (args) {
		return fn.apply(this, args);
	};
};
