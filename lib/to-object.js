// Converts argument to a value of type Object
// http://es5.github.com/#x9.9

'use strict';

module.exports = function (value) {
	if (value == null) {
		throw new TypeError("Cannot convert " + value + " to object");
	}
	return Object(value);
};
