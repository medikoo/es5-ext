// Internal method, used by iteration functions.
// Calls a function for each key-value pair found in object
// Optionally takes compareFn to iterate object in specific order

'use strict';

var getKeys    = Object.keys
  , isFunction = require('../../Function/is-function')

  , compareValues;

compareValues = function (compareFn, a, b) {
	return compareFn(this[a], this[b]);
};

module.exports = function (method) {
	return function (callback, scope, compareFn, compareByKey) {
		var keys, count, fn, list, index;
		list = keys = getKeys(this);
		index = -1;
		count = keys.length;
		if (compareFn) {
			keys.sort(compareByKey ? compareFn : compareValues.bind(this, compareFn));
		}
		fn = function (key) {
			return callback.call(scope, this[key], key, this, ++index, count);
		};
		if (isFunction(method)) {
			return method.call(list, fn, this);
		} else {
			return list[method](fn, this);
		}
	};
};
