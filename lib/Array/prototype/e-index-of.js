'use strict';

var numIsNaN = require('../../Number/is-nan')
  , ois      = require('../../Object/is')
  , value    = require('../../Object/valid-value')

  , indexOf = Array.prototype.indexOf
  , hasOwnProperty = Object.prototype.hasOwnProperty;

module.exports = function (searchElement/*, fromIndex*/) {
	var i, l;
	if (searchElement || (!numIsNaN(searchElement) && (searchElement !== 0))) {
		return indexOf.apply(this, arguments);
	}

	l = value(this).length >>> 0;
	for (i = (arguments[1] >>> 0); i < l; ++i) {
		if (hasOwnProperty.call(this, i) && ois(searchElement, this[i])) return i;
	}
	return -1;
};
