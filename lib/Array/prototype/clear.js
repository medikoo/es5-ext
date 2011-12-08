// Clears the array
//
// Inspired by Google Closure:
// http://closure-library.googlecode.com/svn/docs/closure_goog_array_array.js.html#goog.array.clear

'use strict';

var assertNotNull = require('../../assert-not-null');

module.exports = function () {
	assertNotNull(this);
	this.length = 0;
	return this;
};
