// Returns index at which lists start to differ (looking from left)

'use strict';

var every      = Array.prototype.every
  , toArray    = require('../to-array')
  , sortMethod = require('../../Object/compare-by')('length').call;

module.exports = function () {
	var lists, r;
	lists = [this].concat(toArray(arguments)).sort(sortMethod);
	r = lists[0].length;

	every.call(lists.slice(1), function (list) {
		every.call(this, function (item, i) {
			if (i > r) {
				return false;
			} else if (item === list[i]) {
				return true;
			} else {
				r = i;
				return false;
			}
		});
		return r;
	}, lists[0]);

	return r;
};
