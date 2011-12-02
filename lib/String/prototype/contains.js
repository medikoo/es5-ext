// Whether string contains given string
//
// Name inspired by Closure library: http://closure-library.googlecode.com/svn/trunk/closure/goog/string/string.js

'use strict';

module.exports = function (x) {
	return String(this).indexOf(x) > -1;
};
