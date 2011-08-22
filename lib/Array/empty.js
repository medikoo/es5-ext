// Empty array

'use strict';

var f = require('../Function/functionalize');

module.exports = f(function () {
	this.splice(0, this.length);
	return this;
});
