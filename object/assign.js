'use strict';

var value = require('./valid-value')

  , keys = Object.keys;

module.exports = function (dest, src) {
	dest = Object(value(dest));
	keys(Object(value(src))).forEach(function (key) { dest[key] = src[key]; });
	return dest;
};
