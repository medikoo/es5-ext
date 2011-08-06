// Repeat given string n times
//
// Not rocket science but taken from:
// http://closure-library.googlecode.com/svn/trunk/closure/goog/string/string.js

'use strict';

var f = require('../Function/functionalize');

module.exports = f(function (n) {
	return new Array(n + 1).join(this);
});
