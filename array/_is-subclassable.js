'use strict';

var setPrototypeOf = require('../object/set-prototype-of');

module.exports = (function () {
	var SubArrayTest, arr;

	if (!setPrototypeOf) return false;
	SubArrayTest = function () { Array.apply(this, arguments); };
	setPrototypeOf(SubArrayTest, Array);
	SubArrayTest.prototype = Object.create(Array.prototype, {
		constructor: { value: SubArrayTest, enumerable: false, writable: true,
			configurable: true }
	});
	arr = new SubArrayTest();
	if (!Array.isArray(arr)) return false;
	if (!(arr instanceof SubArrayTest)) return false;

	arr[34] = 'foo';
	return (arr.length === 35);
}());
