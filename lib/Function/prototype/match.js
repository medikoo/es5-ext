// Match first list argument to function arguments
//
// matched(f)(args) =def f.apply(null, args);

'use strict';

var apply          = Function.prototype.apply
  , assertCallable = require('../../Object/assert-callable');

module.exports = function () {
	var fn = this;
	assertCallable(fn);
	return function (args) {
		return apply.call(fn, this, args);
	};
};
