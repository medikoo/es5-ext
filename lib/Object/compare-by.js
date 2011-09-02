// Compare by given property

'use strict';

var f       = require('../Function/functionalize')
  , compare = require('./compare').call;

var cache = {};

module.exports = function (name) {
	return cache[name] || (cache[name] = f(function (other) {
		return compare(this[name], other[name]);
	}));
};
