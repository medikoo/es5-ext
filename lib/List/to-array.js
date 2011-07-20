// Convert array-like object to an Array

'use strict';

var f     = require('../Function/functionalize')
  , slice = Array.prototype.slice;

module.exports = f(function () {
	return (typeof this === 'object') ?
		Array.apply(null, this) : slice.call(this);
});
