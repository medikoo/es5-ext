'use strict';

var isArray = Array.isArray, getPrototypeOf = Object.getPrototypeOf;

module.exports = function (obj) {
	var proto;
	if (!obj || !isArray(obj)) return false;
	proto = getPrototypeOf(obj);
	if (!isArray(proto)) return true;
	return !isArray(getPrototypeOf(proto));
};
