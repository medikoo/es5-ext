// Computes the list of values that are the intersection of all the arrays
//
// Inspired by: http://documentcloud.github.com/underscore/#intersection

'use strict';

var push     = Array.prototype.push
  , f        = require('../Function/functionalize')
  , contains = require('./contains').bind
  , filter   = require('./filter/call')
  , toArray  = require('./to-array').call
  , byLength = require('../Object/compare-by')('length').call;

module.exports = f(function () {
	var lists;
	if (arguments.length) {
		push.apply(lists = [this], arguments);
		lists.sort(byLength);
		return lists.reduce(function (a, b) {
			return filter(a, contains(b));
		});
	} else {
		return toArray(this);
	}
});
