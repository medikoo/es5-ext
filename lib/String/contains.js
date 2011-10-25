// Whether string contains given string
//
// Name inspired by Closure library: http://closure-library.googlecode.com/svn/trunk/closure/goog/string/string.js

'use strict';

var f       = require('../Function/functionalize');

module.exports = f(function (x) {
	return this.indexOf(x) > -1;
});
