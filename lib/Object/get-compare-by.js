// Compare by given property

'use strict';

var assertNotNull = require('../assert-not-null')
  , memoize       = require('../Function/memoize')
  , compare       = require('./prototype/compare')

module.exports = memoize(function (name) {
	return function (other) {
		assertNotNull(this);
		return compare.call(this[name], other[name]);
	};
}, [String]);
