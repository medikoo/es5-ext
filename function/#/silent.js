'use strict';

var callable = require('../../object/valid-callable')

  , apply = Function.prototype.apply;

module.exports = function () {
	var fn = callable(this);
	return function () {
		try {
			return apply.call(fn, this, arguments);
		} catch (e) {
			return e;
		}
	};
};
