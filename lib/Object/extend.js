'use strict';

var forEach = Array.prototype.forEach
  , slice   = Array.prototype.slice
  , keys    = Object.keys
  , valid   = require('../valid-value')
  , extend;

extend = function (src) {
	keys(src).forEach(function (key) {
		this[key] = src[key];
	}, this);
};

module.exports = function (dest, src) {
	forEach.call(arguments, valid);
	slice.call(arguments, 1).forEach(extend, dest);
	return dest;
};
