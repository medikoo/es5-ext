// Sort for array-like object,
// it copies list to array and applies sort on that array.

'use strict';

var f    = require('../Function/functionalize')
  , copy = require('./clone').call

module.exports = f(function (compareFn) {
	return copy(this).sort(compareFn);
});
