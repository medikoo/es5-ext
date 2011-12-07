// Match first list argument to function arguments
//
// matched(f)(args) =def f.apply(null, args);

'use strict';

var apply      = Function.prototype.apply
  , isCallable = require('../../Object/is-callable');

module.exports = function () {
	var fn = this;
	if (!isCallable(fn)) {
		throw new TypeError(fn + " is not a function");
	}
	return function (args) {
		return apply.call(fn, this, args);
	};
};
