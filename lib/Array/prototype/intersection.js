// Computes the list of values that are the intersection of all the arrays
//
// Inspired by: http://documentcloud.github.com/underscore/#intersection

'use strict';

var filter   = Array.prototype.filter
  , push     = Array.prototype.push
  , call     = Function.prototype.call
  , contains = require('./contains')
  , toArray  = require('../to-array')
  , byLength = call.bind(require('../../Object/get-compare-by')('length'))

module.exports = function () {
	var lists;
	if (arguments.length) {
		push.apply(lists = [this], arguments);
		lists.sort(byLength);
		return lists.reduce(function (a, b) {
			return filter.call(a, contains.bind(b));
		});
	} else {
		return toArray(this);
	}
};
