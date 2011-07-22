// Returns the last element in an array without removing it.
// Inspired and stole naming from Closure library:
// http://closure-library.googlecode.com/svn/trunk/closure/goog/array/array.js

var f = require('../Function/functionalize');

module.exports = f(function () {
	return this[this.length - 1];
});
