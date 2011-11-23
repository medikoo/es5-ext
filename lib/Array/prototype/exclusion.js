// Returns elements that are found only in one of given lists

'use strict';

var push     = Array.prototype.push
  , not      = require('../../Function/not').call
  , contains = require('./contains')
  , filter   = require('../../List/filter/call')
  , toArray  = require('../../List/to-array').call
  , byLength = require('../../Object/compare-by')('length').call;

module.exports = function () {
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
};
