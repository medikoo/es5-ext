// Returns the last element in an array without removing it.
// Inspired and stole naming from Closure library:
// http://closure-library.googlecode.com/svn/trunk/closure/goog/array/array.js

var assertNotNull = require('../../assert-not-null');

module.exports = function () {
	assertNotNull(this);
	return this[this.length - 1];
};
