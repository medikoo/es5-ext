// forEach starting from last element

'use strict';

var call           = Function.prototype.call
  , valid          = require('../../valid-value')
  , assertCallable = require('../../Object/assert-callable');

module.exports = function (cb, thisArg) {
	var i, self;

	self = valid(this) && Object(this);
	assertCallable(cb);

	for (i = self.length >>> 0; i >= 0; --i) {
		if (self.hasOwnProperty(i)) {
			call.call(cb, thisArg, self[i], i, self);
		}
	}
};
