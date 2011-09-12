// Whether string represents number

'use strict';

var f = require('../Function/functionalize');

module.exports = f(function () {
	return !isNaN(Number(this));
});
