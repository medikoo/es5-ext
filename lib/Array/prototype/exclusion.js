// Returns elements that are found only in one of given lists

'use strict';

var filter        = Array.prototype.filter
  , push          = Array.prototype.push
  , call          = Function.prototype.call
  , assertNotNull = require('../../assert-not-null')
  , not           = require('../../Function/prototype/not')
  , byLength      = call.bind(require('../../Object/get-compare-by')('length'))
  , toArray       = require('../../Object/prototype/to-array')
  , contains      = require('./contains')
  , copy          = require('./copy');

module.exports = function (list) {
	var lists, seen, result;
	assertNotNull(this);
	if (arguments.length) {
		push.apply(lists = [this], arguments);
		seen = [];
		result = [];
		lists.sort(byLength).forEach(function (list) {
			result = result.filter(not.call(contains.bind(list)))
				.concat(filter.call(list, not.call(contains.bind(seen))));
			push.apply(seen, toArray.call(list));
		});
		return result;
	} else {
		return copy.call(this);
	}
};
