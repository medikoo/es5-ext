// Wrap function with logger

'use strict';

var apply          = Function.prototype.apply
  , assertCallable = require('../../Object/assert-callable');

module.exports = function (log) {
	var fn = this;
	assertCallable(fn);
	return function () {
		log.push(arguments);
		return apply.call(fn, this, arguments);
	};
};
