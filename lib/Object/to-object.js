// Converts argument to a value of type Object
// http://es5.github.com/#x9.9

'use strict';

module.exports = function (value) {
	if (value == null) {
		throw new TypeError("toObject called on null or undefined");
	}
	return Object(value);
};
