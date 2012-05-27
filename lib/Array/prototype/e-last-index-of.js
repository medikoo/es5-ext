'use strict';

var lastIndexOf = Array.prototype.lastIndexOf
  , isNaN       = require('../../Number/is-nan')
  , ois         = require('../../Object/is')
  , value       = require('../../Object/valid-value');

module.exports = function (searchElement) {
	var i, index, self, fromIndex;
	if (!isNaN(searchElement) && (searchElement !== 0)) {
		return lastIndexOf.apply(this, arguments);
	}

	self = Object(value(this));
	fromIndex = Number(arguments[1]);
	fromIndex = isNaN(fromIndex) ? ((self.length >>> 0) - 1) : fromIndex;
	for (i = fromIndex; i >= 0; --i) {
		if (self.hasOwnProperty(i) && ois(searchElement, self[i])) {
			return i;
		}
	}
	return -1;
};
