// Convert array-like object to an Array

'use strict';

var isArray     = Array.isArray
  , slice       = Array.prototype.slice
  , f           = require('../Function/functionalize')
  , isArguments = require('../Function/is-arguments')

module.exports = f(function () {
	if (isArray(this)) {
		return this;
	} else if (isArguments(this)) {
		return (this.length === 1) ? [this[0]] : Array.apply(null, this);
	} else {
		return slice.call(this);
	}
});
