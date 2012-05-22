// Same as native, with that difference that uses Object.is for equality
// check. Makes it reliable for NaN or -0, +0 values

'use strict';

var indexOf = Array.prototype.indexOf
  , valid   = require('../../valid-value')
  , isNaN   = require('../../Number/is-nan')
  , is      = require('../../Object/is');

module.exports = function (value, fromIndex) {
	var i, index, self;
	if (!isNaN(value) && (value !== 0)) {
		return indexOf.apply(this, arguments);
	}

	self = valid(this) && Object(this);
	for (i = (fromIndex >>> 0); i < (self.length >>> 0); ++i) {
		if (self.hasOwnProperty(i) && is(value, self[i])) {
			return i;
		}
	}
	return -1;
};
