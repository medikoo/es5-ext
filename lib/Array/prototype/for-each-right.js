// forEach starting from last element

'use strict';

var isFunction = require('../../Function/is-function')
  , toObject   = require('../../to-object');

module.exports = function (fn, scope) {
	var i, self;

	self = toObject(this);
	if (!isFunction(fn)) {
		throw new TypeError(fn + ' is not a function');
	}
	for (i = self.length; i >= 0; --i) {
		if (self.hasOwnProperty(i)) {
			fn.call(scope, self[i], i, self);
		}
	}
};
