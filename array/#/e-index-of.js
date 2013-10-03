'use strict';

var numIsNaN = require('../../number/is-nan')
  , eq       = require('../../object/eq')
  , value    = require('../../object/valid-value')

  , indexOf = Array.prototype.indexOf
  , hasOwnProperty = Object.prototype.hasOwnProperty
  , abs = Math.abs, floor = Math.floor;

module.exports = function (searchElement/*, fromIndex*/) {
	var i, l, fromIndex;
	if (searchElement || (!numIsNaN(searchElement) && (searchElement !== 0))) {
		return indexOf.apply(this, arguments);
	}

	l = value(this).length >>> 0;
	fromIndex = arguments[1];
	if (isNaN(fromIndex)) fromIndex = 0;
	else if (fromIndex >= 0) fromIndex = floor(fromIndex);
	else fromIndex = (this.length >>> 0) - floor(abs(fromIndex));

	for (i = fromIndex; i < l; ++i) {
		if (hasOwnProperty.call(this, i) && eq(searchElement, this[i])) return i;
	}
	return -1;
};
