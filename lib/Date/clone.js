'use strict';

var f = require('../Function/functionalize');

module.exports = f(function () {
	return new Date(this.getTime());
});
