'use strict';

var keys  = require('../keys')
  , value = require('../valid-value');

module.exports = function (dest, src) {
	dest = Object(value(dest));
	keys(src).forEach(function (key) { dest[key] = src[key]; });
	return dest;
};
