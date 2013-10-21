'use strict';

var setPrototypeOf = require('../object/set-prototype-of')

  , SubArrayTest, arr;

if (!setPrototypeOf) {
	module.exports = false;
} else {
	SubArrayTest = function () { Array.apply(this, arguments); };
	setPrototypeOf(SubArrayTest, Array);
	SubArrayTest.prototype = Object.create(Array.prototype, {
		constructor: { value: SubArrayTest, enumerable: false, writable: true,
			configurable: true }
	});
	arr = new SubArrayTest();
	if (!(arr instanceof SubArrayTest)) {
		module.exports = false;
	} else {
		arr[34] = 'foo';
		module.exports = (arr.length === 35);
	}
}
