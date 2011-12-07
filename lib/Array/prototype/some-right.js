// some starting from last element

'use strict';

var call           = Function.prototype.call
  , assertCallable = require('../../Object/assert-callable')
  , toObject       = require('../../to-object');

module.exports = function (fn, scope) {
	var i, self;

	self = toObject(this);
	assertCallable(fn);
	for (i = self.length; i >= 0; --i) {
		if (self.hasOwnProperty(i) && call.call(fn, scope, self[i], i, self)) {
			return true;
		}
	}
	return false;
};
