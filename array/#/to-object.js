'use strict';

var isCallable = require('../../object/is-callable')
  , validValue = require('../../object/valid-value')

  , forEach = Array.prototype.forEach, call = Function.prototype.call;

module.exports = function (/*, cb, thisArg*/) {
	var obj = {}, cb = arguments[0], thisArg = arguments[1];

	if (cb == null) {
		forEach.call(this, function (value, index) {
			validValue(value);
			obj[value[0]] = value[1];
		}, this);
		return obj;
	}

	if (!isCallable(cb)) {
		forEach.call(this, function (value, index) {
			obj[value] = cb[index];
		}, this);
		return obj;
	}

	forEach.call(this, function (value, index) {
		call.call(cb, thisArg, obj, value, index, this);
	}, this);
	return obj;
};
