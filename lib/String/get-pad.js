// Makes string at least n characters long.
// If it's shorter than it's padded with repeated pregiven string

'use strict';

var abs    = Math.abs
  , max    = Math.max
  , repeat = require('./prototype/repeat');

module.exports = function (fill, n) {
	fill = repeat.call(fill, abs(n) || 1);
	return function () {
		var self = String(this), l = self.length;
		return (n < 0) ?
			(self + (((l + n) >= 0) ? '' : fill.slice(n + l))) :
		fill.slice(0, max(0, n - l)) + self;
	};
};
