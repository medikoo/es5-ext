// Wrap function with logger

'use strict';

var apply      = Function.prototype.apply
  , isCallable = require('../../Object/is-callable');

module.exports = function (log) {
	var fn = this;
	if (!isCallable(fn)) {
		throw new TypeError(fn + " is not a function");
	}
	return function () {
		log.push(arguments);
		return apply.call(fn, this, arguments);
	};
};
