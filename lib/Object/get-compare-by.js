// Compare by given property

'use strict';

var memoize = require('../Function/memoize')
  , compare = require('./compare').call;

module.exports = memoize(function (name) {
	return function (other) {
		return compare(this[name], other[name]);
	};
}, [String]);
