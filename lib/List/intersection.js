// Computes the list of values that are the intersection of all the arrays
//
// Inspired by: http://documentcloud.github.com/underscore/#intersection

'use strict';

var filter   = Array.prototype.filter
  , push     = Array.prototype.push
  , f        = require('../Function/functionalize')
  , contains = require('../Array/prototype/contains')
  , toArray  = require('./to-array').call
  , byLength = require('../Object/compare-by')('length').call;

module.exports = f(function () {
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
});
