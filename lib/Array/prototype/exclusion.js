'use strict';

var filter   = Array.prototype.filter
  , push     = Array.prototype.push
  , call     = Function.prototype.call
  , valid    = require('../../valid-value')
  , not      = require('../../Function/prototype/not')
  , toArray  = require('../from')
  , contains = require('./contains')
  , copy     = require('./copy')
  , byLength = require('./_compare-by-length');

module.exports = function (list) {
	var lists, seen, result;
	if (arguments.length) {
		push.apply(lists = [this], arguments);
		lists.forEach(valid);
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
