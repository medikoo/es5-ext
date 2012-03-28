// Internal method, used by iteration functions.
// Calls a function for each key-value pair found in object
// Optionally takes compareFn to iterate object in specific order

'use strict';

var call       = Function.prototype.call
  , getKeys    = Object.keys
  , isCallable = require('./is-callable')

  , compareValues;

compareValues = function (compareFn, a, b) {
	return compareFn(this[a], this[b]);
};

module.exports = function (method) {
	return function (obj, cb, thisArg, compareFn, byKeys) {
		var keys, count, fn, list, index;
		list = keys = getKeys(obj);
		index = -1;
		count = keys.length;
		if (compareFn) {
			keys.sort(byKeys ? compareFn : compareValues.bind(obj, compareFn));
		}
		fn = function (key) {
			return cb.call(thisArg, this[key], key, this, ++index, count);
		};
		if (isCallable(method)) {
			return call.call(method, list, fn, obj);
		} else {
			return list[method](fn, obj);
		}
	};
};
