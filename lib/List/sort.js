// Sort for array-like object,
// it copies list to array and applies sort on that array.

'use strict';

var f    = require('../Function/functionalize')
  , copy = require('./copy');

module.exports = f(function (compareFn) {
	return copy(this).sort(compareFn);
});
