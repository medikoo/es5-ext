'use strict';

var apply          = Function.prototype.apply
  , assertCallable = require('../../Object/assert-callable');

module.exports = function () {
	var fn, args;
	assertCallable(fn = this);
	args = arguments;
	return function () {
		return apply.call(fn, this, args);
	};
};
