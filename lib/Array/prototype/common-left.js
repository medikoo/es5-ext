'use strict';

var every    = Array.prototype.every
  , call     = Function.prototype.call
  , is       = require('../../Object/is')
  , toArray  = require('../../Object/to-array')
  , valid    = require('../../valid-value')
  , byLength = require('./_compare-by-length');

module.exports = function (list) {
	var lists, r, l;

	lists = [this].concat(toArray(arguments));
	lists.forEach(valid);
	lists.sort(byLength);
	l = r = (lists[0].length >>> 0);

	every.call(lists.slice(1), function (list) {
		var i;
		for (i = 0; i < l; ++i) {
			if (i > r) {
				break;
			} else if (!is(this[i], list[i])) {
				r = i;
				break;
			}
		}
		return r;
	}, lists[0]);

	return r;
};
