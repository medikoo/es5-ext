// Floor date to beginning of day

'use strict';

var f = require('../../Function/functionalize');

module.exports = f(function () {
	this.setHours(0, 0, 0, 0);
	return this;
});
