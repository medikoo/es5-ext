// Returns the last element in an array without removing it.
// Inspired and stole naming from Closure library:
// http://closure-library.googlecode.com/svn/trunk/closure/goog/array/array.js

var toObject = require('../../to-object')
module.exports = function () {
	var self = toObject(this);
	return self[self.length - 1];
};
