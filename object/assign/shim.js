'use strict';

var keys  = require('../keys')
  , value = require('../valid-value');

module.exports = function (dest, src) {
	var error;
	dest = Object(value(dest));
	keys(src).forEach(function (key) {
		try {
			dest[key] = src[key];
		} catch (e) {
			if (!error) error = e;
		}
	});
	if (error !== undefined) throw error;
	return dest;
};
