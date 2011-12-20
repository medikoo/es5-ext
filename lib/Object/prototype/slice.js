// Slice for plain objects
// Returns limited set of properties, optionally specific order in which
// properties are chosen is considered

'use strict';

var max           = Math.max
  , assertNotNull = require('../../assert-not-null')
  , copy          = require('./copy')
  , some          = require('./some');

module.exports = function (start, end, compareFn, byKeys) {
	var r;
	assertNotNull(this);
	if ((start == null) || isNaN(Number(start))) {
		start = 0;
	}
	if (end == null) {
		end = Infinity;
	} else if (isNaN(Number(end))) {
		end = 0;
	}
	start = Number(start);
	end = Number(end);

	if ((end === Infinity) && (start === 0)) {
		return copy.call(this);
	}

	r = {};
	if (start < end) {
		some.call(this, function (value, key, scope, index, count) {
			if (start < 0) {
				start = max(count + start, 0);
			}
			if (end < 0) {
				end = max(count + end, 0);
			}
			if (index === end) {
				return true;
			}
			if (index >= start) {
				r[key] = value;
			}
			return false;
		}, null, compareFn, byKeys);
	}

	return r;
};
