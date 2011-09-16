// Compare by given property

'use strict';

var f       = require('../Function/functionalize')
  , cache   = require('../Function/cache')
  , compare = require('./compare').call;

module.exports = cache(function (name) {
	return f(function (other) {
		return compare(this[name], other[name]);
	});
}, [String]);
