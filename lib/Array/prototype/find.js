'use strict';

var some     = Array.prototype.some
  , apply    = Function.prototype.apply
  , callable = require('../../Object/valid-callable');

module.exports = function (query, thisArg) {
	var r;
	callable(query);

	return some.call(this, function (value) {
		if (apply.call(query, this, arguments)) {
			r = value;
			return true;
		}
		return false;
	}, thisArg) ? r : null;
};
