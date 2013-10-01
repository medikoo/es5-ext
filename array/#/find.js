'use strict';

var callable = require('../../object/valid-callable')
  , value    = require('../../object/valid-value')

  , some = Array.prototype.some, apply = Function.prototype.apply;

module.exports = function (predicate/*, thisArg*/) {
	var kValue, self;
	self = Object(value(this));
	callable(predicate);

	return some.call(self, function (value) {
		if (apply.call(predicate, this, arguments)) {
			kValue = value;
			return true;
		}
		return false;
	}, arguments[1]) ? kValue : undefined;
};
