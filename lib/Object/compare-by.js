// Compare by given property

'use strict';

var f       = require('../Function/functionalize')
  , memoize = require('../Function/memoize')
  , compare = require('./compare').call;

module.exports = memoize(function (name) {
	return f(function (other) {
		return compare(this[name], other[name]);
	});
}, [String]);
