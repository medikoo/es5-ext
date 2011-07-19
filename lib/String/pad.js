'use strict';

var f = require('../Function/functionalize')
  , repeat = require('./repeat');

module.exports = f(function (n) {
	var fill = this;
	return f(function () {
		return repeat(fill, Math.max(0, this.length - n)) + this;
	});
});
