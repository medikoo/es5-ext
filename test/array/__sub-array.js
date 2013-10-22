'use strict';

var setPrototypeOf = require('../../object/set-prototype-of');

module.exports = (function () {
	var SubArrayTest;

	if (!setPrototypeOf) return null;
	SubArrayTest = function () {
		var arr = Array.apply(this, arguments);
		setPrototypeOf(arr, SubArrayTest.prototype);
		return arr;
	};
	setPrototypeOf(SubArrayTest, Array);
	SubArrayTest.prototype = Object.create(Array.prototype, {
		constructor: { value: SubArrayTest, enumerable: false, writable: true,
			configurable: true }
	});
	return SubArrayTest;
}());
