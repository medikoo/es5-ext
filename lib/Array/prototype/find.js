// Find first element for which given function returns true

'use strict';

var some           = Array.prototype.some
  , apply          = Function.prototype.apply
  , assertCallable = require('../../Object/assert-callable');

module.exports = function (query, thisArg) {
	var r;
	assertCallable(query);

	return some.call(this, function (value) {
		if (apply.call(query, this, arguments)) {
			r = value;
			return true;
		}
		return false;
	}, thisArg) ? r : null;
};
