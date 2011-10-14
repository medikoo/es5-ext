// Internal method, used by iteration functions.
// Calls a function for each key-value pair found in object
// Optionally takes compareFn to iterate object in specific order

'use strict';

var getKeys    = Object.keys
  , isFunction = require('../../Function/is-function')
  , values     = require('./values').call;

module.exports = function (method) {
	return function (callback, scope, compareFn, compareByKey) {
		var keys, count, fn, col, index;
		col = keys = getKeys(this);
		index = -1;
		count = keys.length;
		if (compareFn) {
			if (compareByKey) {
				keys.sort(compareFn);
			} else {
				fn = function (value) {
					var key;
					keys.some(function (k, index) {
						if (this[k] === value) {
							key = k;
							keys.splice(index, 1);
							return true;
						}
						return false;
					}, this);
					return callback.call(scope, value, key, this, ++index, count);
				};
				col = values(this).sort(compareFn);
			}
		}
		if (!fn) {
			fn = function (key) {
				return callback.call(scope, this[key], key, this, ++index, count);
			};
		}
		if (isFunction(method)) {
			return method.call(col, fn, this);
		} else {
			return col[method](fn, this);
		}
	};
};
