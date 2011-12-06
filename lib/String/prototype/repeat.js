// Repeat given string n times
//
// Not rocket science but taken from:
// http://closure-library.googlecode.com/svn/trunk/closure/goog/string/string.js

'use strict';

module.exports = function (n) {
	return Array(n + 1).join(this);
};
