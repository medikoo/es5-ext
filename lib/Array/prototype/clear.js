// Clears the array
//
// Inspired by Google Closure:
// http://closure-library.googlecode.com/svn/docs/closure_goog_array_array.js.html#goog.array.clear

'use strict';

var toObject = require('../../to-object');

module.exports = function () {
	toObject(this).length = 0;
	return this;
};
