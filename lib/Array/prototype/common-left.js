// Returns index at which lists start to differ (looking from left)

'use strict';

var every         = Array.prototype.every
  , call          = Function.prototype.call
  , assertNotNull = require('../../assert-not-null')
  , toArray       = require('../../Object/prototype/to-array')
  , sortMethod    = call.bind(require('../../Object/get-compare-by')('length'));

module.exports = function (list) {
	var lists, r, l;
	assertNotNull(this);

	lists = [this].concat(toArray.call(arguments)).sort(sortMethod);
	l = r = lists[0].length >>> 0;

	every.call(lists.slice(1), function (list) {
		var i;
		for (i = 0; i < l; ++i) {
			if (i > r) {
				break;
			} else if (this[i] === list[i]) {
				continue;
			} else {
				r = i;
				break;
			}
		}
		return r;
	}, lists[0]);

	return r;
};
