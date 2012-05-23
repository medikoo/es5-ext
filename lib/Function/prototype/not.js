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
