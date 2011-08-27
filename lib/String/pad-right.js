// Makes string at least n characters long.
// If it's shorter than it's padded right with repeated pregiven string

'use strict';

var f      = require('../Function/functionalize')
  , repeat = require('./repeat').call;

module.exports = f(function (n) {
	var fill = repeat(this, n);
	return f(function () {
		return this + fill.slice(0, Math.max(0, n - this.length));
	});
});
