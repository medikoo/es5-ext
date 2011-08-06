// Makes string at least n characters long.
// If it's shorter than it's padded with repeated pregiven string

'use strict';

var f      = require('../Function/functionalize')
  , repeat = require('./repeat').call;

module.exports = f(function (n) {
	var fill = repeat(this, n);
	return f(function () {
		return fill.slice(0, Math.max(0, n - this.length)) + this;
	});
});
