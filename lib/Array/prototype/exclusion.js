'use strict';

var filter   = Array.prototype.filter
  , push     = Array.prototype.push
  , call     = Function.prototype.call
  , valid    = require('../../valid-value')
  , not      = require('../../Function/prototype/not')
  , byLength = call.bind(require('../../Object/get-compare-by')('length'))
  , toArray  = require('../../Object/to-array')
  , contains = require('./contains')
  , copy     = require('./copy');

module.exports = function (list) {
	var lists, seen, result;
	valid(this);
	if (arguments.length) {
		push.apply(lists = [this], arguments);
		seen = [];
		result = [];
		lists.sort(byLength).forEach(function (list) {
			result = result.filter(not.call(contains.bind(list)))
				.concat(filter.call(list, not.call(contains.bind(seen))));
			push.apply(seen, toArray(list));
		});
		return result;
	} else {
		return copy.call(this);
	}
};
