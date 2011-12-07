// Computes the list of values that are the intersection of all the arrays
//
// Inspired by: http://documentcloud.github.com/underscore/#intersection

'use strict';

var filter   = Array.prototype.filter
  , push     = Array.prototype.push
  , slice    = Array.prototype.slice
  , call     = Function.prototype.call
  , toObject = require('../../to-object')
  , contains = require('./contains')
  , byLength = call.bind(require('../../Object/get-compare-by')('length'))

module.exports = function () {
	var lists, self;
	if (arguments.length) {
		self = toObject(this);
		push.apply(lists = [self], arguments);
		lists.sort(byLength);
		return lists.reduce(function (a, b) {
			return filter.call(a, contains.bind(b));
		});
	} else {
		return slice.call(this);
	}
};
