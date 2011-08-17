// Convert array-like object to an Array

'use strict';

var isArray = Array.isArray
  , f       = require('../Function/functionalize')
  , slice   = Array.prototype.slice;

module.exports = f(function () {
	if (typeof this === 'object') {
		if (isArray(this)) {
			return this;
		}
		return (this.length === 1) ? [this[0]] : Array.apply(null, this);
	} else {
		return slice.call(this);
	}
});
