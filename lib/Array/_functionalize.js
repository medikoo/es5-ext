'use strict';

var call     = Function.prototype.call
  , isArray  = Array.isArray;

module.exports = function (method, name) {
	return function (context) {
		if (!isArray(context)) {
			throw new TypeError(name + " must be called on an array");
		}
		return call.apply(method, arguments);
	};
};
