// Defining function's 'prototype' property with Object.defineProperty sets
// different value and makes property immutable.
//
// V8 bug: http://code.google.com/p/v8/issues/detail?id=1530

'use strict';

var detect = function () {
	var A, x, result;

	A = function () {};
	x = {};
	Object.defineProperty(A, 'prototype', { value: x });
	result = (A.prototype !== x);

	detect = function () {
		return result;
	};
	return result;
};

module.exports = function () {
	return detect();
};
