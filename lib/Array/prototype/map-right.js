// map, starting from last element

'use strict';

var isFunction = require('../../Function/is-function')
  , toObject   = require('../../Object/to-object');

module.exports = function (fn, scope) {
	var i, self, result, index;

	self = toObject(this);
	if (!isFunction(fn)) {
		throw new TypeError(fn + ' is not a function');
	}
	result = Array(self.length);
	index = 0;
	for (i = self.length - 1; i >= 0; --i, ++index) {
		if (self.hasOwnProperty(i)) {
			result[index] = fn.call(scope, self[i], i, self);
		}
	}
	return result;
};
