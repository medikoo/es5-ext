// Functions that wraps values in descriptors
// Handy way to define properties with descriptors

'use strict';

var assertCallable = require('./assert-callable')

  , byGetSet, byValue;

byGetSet = function (c, e) {
	return function (get, set) {
		(get == null) || assertCallable(get);
		(set == null) || assertCallable(set);
		return { get: get || undefined, set: set || undefined,
			configurable: c, enumerable: e };
	};
};

byValue = function (c, e, w) {
	return function (value) {
		return { value: value, writable: w, configurable: c, enumerable: e };
	};
};

exports = module.exports = byValue(true, false, true);
exports.c         = byValue(true, false, false);
exports.c.getSet  = byGetSet(true, false);
exports.ce        = byValue(true, true, false);
exports.ce.getSet = byGetSet(true, true);
exports.cew       = byValue(true, true, true);
exports.cw        = exports
exports.e         = byValue(false, true, false);
exports.e.getSet  = byGetSet(false, true);
exports.ew        = byValue(false, true, true);
exports.v         = byValue(false, false, false);
exports.v.getSet  = byGetSet(false, false);
exports.w         = byValue(false, false, true);

exports.getSet = exports.c.getSet;