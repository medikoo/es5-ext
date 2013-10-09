// Not rocket science but taken from:
// http://closure-library.googlecode.com/svn/trunk/closure/goog/string/string.js

'use strict';

var value = require('../../object/valid-value')
  , toInt = require('../../number/to-int');

module.exports = function (count) {
	count = toInt(count);
	if (count < 0) throw new RangeError("Count must be >= 0");
	if (!isFinite(count)) throw new RangeError("Count must be < ∞");
	if (!count) return '';
	return new Array(count + 1).join(String(value(this)));
};
