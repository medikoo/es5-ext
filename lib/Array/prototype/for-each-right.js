// forEach starting from last element

'use strict';

var call       = Function.prototype.call
  , isCallable = require('../../Object/is-callable')
  , toObject   = require('../../to-object');

module.exports = function (fn, scope) {
	var i, self;

	self = toObject(this);
	if (!isCallable(fn)) {
		throw new TypeError(fn + ' is not a function');
	}
	for (i = self.length; i >= 0; --i) {
		if (self.hasOwnProperty(i)) {
			call.call(fn, scope, self[i], i, self);
		}
	}
};
