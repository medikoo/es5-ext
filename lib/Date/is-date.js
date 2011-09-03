// Whether object is date
//
// Inspired by Node's implementation:
// https://github.com/TooTallNate/node/commit/bd1d591f3b0b808d5ff58d96aea9db6703b966b9

'use strict';

var toString = require('../Object/to-string/call')

  , id = toString(new Date());

module.exports = function (x) {
	if (!x) {
		return false;
	}
	return x instanceof Date || (toString(x) === id) || false;
};


