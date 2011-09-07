// Returns a function that takes an object, and sets given value for
// object's property

'use strict';

module.exports = function (name, value) {
	return function (obj) {
		obj[name] = value;
	};
};
