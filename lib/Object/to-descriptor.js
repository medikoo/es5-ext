// Return descriptor for value.
// Shortcut for defining non enumerable, non writeable & non configurable
// properties

'use strict';

var f = require('../Function/functionalize');

module.exports = f(function () {
	return { value: this };
});
