'use strict';

var apply          = Function.prototype.apply
  , assertCallable = require('../../Object/assert-callable');

module.exports = function () {
	var fn = assertCallable(this) && this;
	return function () {
		try {
			return apply.call(fn, this, arguments);
		} catch (e) {
			return e;
		}
	};
};
