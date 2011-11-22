// Returns elements that are found only in one of given lists

'use strict';

var push     = Array.prototype.push
  , f        = require('../Function/functionalize')
  , not      = require('../Function/not').call
  , contains = require('../Array/prototype/contains')
  , filter   = require('./filter/call')
  , toArray  = require('./to-array').call
  , byLength = require('../Object/compare-by')('length').call;

module.exports = f(function () {
	var lists, seen;
	if (arguments.length) {
		push.apply(lists = [this], arguments);
		lists.sort(byLength);
		seen = [];
		return lists.reduce(function (r, list) {
			r = r.filter(not(contains.bind(list)))
				.concat(filter(list, not(contains.bind(seen))));
			push.apply(seen, toArray(list));
			return r;
		}, []);
	} else {
		return toArray(this);
	}
});
