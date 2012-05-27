'use strict';

var indexOf = Array.prototype.indexOf
  , isNaN   = require('../../Number/is-nan')
  , is      = require('../../Object/is')
  , value   = require('../../Object/valid-value');

module.exports = function (searchElement, fromIndex) {
	var i, index, self;
	if (!isNaN(searchElement) && (searchElement !== 0)) {
		return indexOf.apply(this, arguments);
	}

	self = Object(value(this));
	for (i = (fromIndex >>> 0); i < (self.length >>> 0); ++i) {
		if (self.hasOwnProperty(i) && is(searchElement, self[i])) {
			return i;
		}
	}
	return -1;
};
