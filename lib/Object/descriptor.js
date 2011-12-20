// Functions that wraps values in descriptors
// Handy way to define properties with descriptors

'use strict';

var assertCallable = require('./assert-callable')

  , byValueOrGetSet, byValue;

byValueOrGetSet = function (c, e) {
	return function (get, set) {
		if (set) {
			assertCallable(get);
			assertCallable(set);
			return { get: get, set: set, configurable: c, enumerable: e };
		}
		return { value: get, configurable: c, enumerable: e };
	};
};

byValue = function (c, e) {
	return function (value) {
		return { value: value, writable: true, configurable: c, enumerable: e };
	};
};

exports = module.exports = byValueOrGetSet(false, false);
exports.c   = byValueOrGetSet(true, false);
exports.ce  = byValueOrGetSet(true, true);
exports.cew = byValue(true, true);
exports.cw  = byValue(true, false);
exports.e   = byValueOrGetSet(false, true);
exports.ew  = byValue(false, true);
exports.v   = exports;
exports.w   = byValue(false, false);
