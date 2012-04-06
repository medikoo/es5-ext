// Compare by given property

'use strict';

var assertNotNull = require('../assert-not-null')
  , memoize       = require('../Function/memoize')
  , compare       = require('./compare');

module.exports = memoize(function (name) {
	assertNotNull(name);
	name = String(name);

	return function (other) {
		assertNotNull(this);
		assertNotNull(other);
		return compare(this[name], other[name]);
	};
}, [String]);
