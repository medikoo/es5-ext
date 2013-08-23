'use strict';

var numIsNaN = require('../../Number/is-nan')
  , ois      = require('../../Object/is')
  , value    = require('../../Object/valid-value')

  , lastIndexOf = Array.prototype.lastIndexOf
  , hasOwnProperty = Object.prototype.hasOwnProperty
  , abs = Math.abs, floor = Math.floor;

module.exports = function (searchElement/*, fromIndex*/) {
	var i, fromIndex;
	if (searchElement || (!numIsNaN(searchElement) && (searchElement !== 0))) {
		return lastIndexOf.apply(this, arguments);
	}

	value(this);
	fromIndex = arguments[1];
	if (isNaN(fromIndex)) fromIndex = ((this.length >>> 0) - 1);
	else if (fromIndex >= 0) fromIndex = floor(fromIndex);
	else fromIndex = (this.length >>> 0) - floor(abs(fromIndex));

	for (i = fromIndex; i >= 0; --i) {
		if (hasOwnProperty.call(this, i) && ois(searchElement, this[i])) return i;
	}
	return -1;
};
