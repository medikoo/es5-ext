'use strict';

var numIsNaN = require('../../Number/is-nan')
  , ois      = require('../../Object/is')
  , value    = require('../../Object/valid-value')

  , lastIndexOf = Array.prototype.lastIndexOf
  , hasOwnProperty = Object.prototype.hasOwnProperty;

module.exports = function (searchElement/*, fromIndex*/) {
	var i, fromIndex;
	if (searchElement || (!numIsNaN(searchElement) && (searchElement !== 0))) {
		return lastIndexOf.apply(this, arguments);
	}

	value(this);
	fromIndex = arguments[1];
	fromIndex = isNaN(fromIndex) ? ((this.length >>> 0) - 1) : (fromIndex >>> 0);
	for (i = fromIndex; i >= 0; --i) {
		if (hasOwnProperty.call(this, i) && ois(searchElement, this[i])) return i;
	}
	return -1;
};
