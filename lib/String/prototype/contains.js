// Whether string contains given string
//
// Name inspired by Closure library: http://closure-library.googlecode.com/svn/trunk/closure/goog/string/string.js

'use strict';

var indexOf = String.prototype.indexOf;

module.exports = function (searchString) {
	return indexOf.call(this, searchString) > -1;
};
