// Makes string at least n characters long.
// If it's shorter than it's padded right with repeated pregiven string

'use strict';

var repeat = require('./repeat').call;

module.exports = function (fill, n) {
	fill = repeat(fill, n || 1);
	return function () {
		var self = String(this);
		return self + fill.slice(0, Math.max(0, n - self.length));
	};
};
