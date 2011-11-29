// Whether object is date
//
// Inspired by Node's implementation:
// https://github.com/TooTallNate/node/commit/bd1d591f3b0b808d5ff58d96aea9db6703b966b9

'use strict';

var toString = Object.prototype.toString

  , id = toString.call(new Date());

module.exports = function (x) {
	return (x && ((x instanceof Date) || (toString.call(x) === id))) || false;
};
