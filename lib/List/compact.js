// Returns a copy of the array-like object with all falsy values removed.
//
// Inspired by: http://documentcloud.github.com/underscore/#compact

'use strict';

var f      = require('../Function/functionalize')
  , filter = require('./filter').call;

module.exports = f(function () {
	return filter(this, Boolean);
});
