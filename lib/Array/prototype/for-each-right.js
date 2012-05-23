'use strict';

var call     = Function.prototype.call
  , valid    = require('../../valid-value')
  , callable = require('../../Object/valid-callable');

module.exports = function (cb, thisArg) {
	var i, self;

	self = valid(this) && Object(this);
	callable(cb);

	for (i = self.length >>> 0; i >= 0; --i) {
		if (self.hasOwnProperty(i)) {
			call.call(cb, thisArg, self[i], i, self);
		}
	}
};
