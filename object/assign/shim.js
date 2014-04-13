'use strict';

var keys  = require('../keys')
  , value = require('../valid-value')

  , max = Math.max;

module.exports = function (dest, src/*, …srcn*/) {
	var error, i = 1, l = max(arguments.length, 2);
	dest = Object(value(dest));
	for (; i < l; ++i) {
		src = arguments[i];
		keys(src).forEach(function (key) {
			try { dest[key] = src[key]; } catch (e) {
				if (!error) error = e;
			}
		});
	}
	if (error !== undefined) throw error;
	return dest;
};
