// Whether list contains the given object.
//
// Name inspired by Closure library: http://closure-library.googlecode.com/svn/trunk/closure/goog/string/string.js

'use strict';

var indexOf = Array.prototype.indexOf;

module.exports = function (x) {
	return indexOf.call(this, x) > -1;
};
