// Returns index at which lists start to differ (looking from left)

'use strict';

var every      = Array.prototype.every
  , call       = Function.prototype.call
  , toArray    = require('../../Object/prototype/to-array')
  , sortMethod = call.bind(require('../../Object/get-compare-by')('length'));

module.exports = function () {
	var lists, r;
	lists = [this].concat(toArray.call(arguments)).sort(sortMethod);
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
