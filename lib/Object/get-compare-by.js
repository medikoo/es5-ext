// Compare by given property

'use strict';

var memoize = require('../Function/memoize')
  , compare = require('./prototype/compare')

module.exports = memoize(function (name) {
	return function (other) {
		return compare.call(this[name], other[name]);
	};
}, [String]);
