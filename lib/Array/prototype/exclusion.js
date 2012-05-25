'use strict';

var filter   = Array.prototype.filter
  , push     = Array.prototype.push
  , call     = Function.prototype.call
  , not      = require('../../Function/prototype/not')
  , value    = require('../../Object/valid-value')
  , toArray  = require('../from')
  , contains = require('./contains')
  , copy     = require('./copy')
  , byLength = require('./_compare-by-length');

module.exports = function (list) {
	var lists, seen, result;
	if (arguments.length) {
		push.apply(lists = [this], arguments);
		lists.forEach(value);
		seen = [];
		result = [];
		lists.sort(byLength).forEach(function (list) {
			result = result.filter(function (item) {
				return !contains.call(list, item);
			}).concat(filter.call(list, not.call(contains.bind(seen))));
			push.apply(seen, toArray(list));
		});
		return result;
	} else {
		return copy.call(this);
	}
};
