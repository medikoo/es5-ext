'use strict';

var toUint = require('../number/to-uint')
  , eq     = require('./eq')

  , keys = Object.keys
  , propertyIsEnumerable = Object.prototype.propertyIsEnumerable

  , isCopy;

isCopy = function (a, b, depth, cache) {
	var aKeys, bKeys, index, index2;

	if (((typeof a) !== (typeof b)) || (String(a) !== String(b))) {
		return false;
	}
	if (!a || (typeof a !== 'object')) {
		return true;
	}

	aKeys = keys(a);
	bKeys = keys(b);
	if (aKeys.length !== bKeys.length) {
		return false;
	}
	if (cache) {
		// Prevent infinite recursion
		index = cache.a.indexOf(a);
		if (index === -1) {
			index = cache.a.indexOf(b);
			if (index === -1) {
				cache.a.push(a);
				cache.b.push([b]);
			} else if (cache.b[index].indexOf(a) === -1) {
				cache.b[index].push(a);
			} else {
				return true;
			}
		} else if (!((cache.b[index].indexOf(b) !== -1) ||
				(((index2 = cache.a.indexOf(b)) !== -1) &&
				(cache.b[index2].indexOf(a) !== -1)))) {
			cache.b[index].push(b);
		} else {
			return true;
		}
	}
	return aKeys.every(function (name) {
		if (!propertyIsEnumerable.call(b, name)) {
			return false;
		}
		if (eq(a[name], b[name])) {
			return true;
		}
		return depth ? isCopy(a[name], b[name], depth - 1, cache) : false;
	});
};

module.exports = function (a, b/*, depth*/) {
	var depth;

	if (eq(a, b)) {
		return true;
	}

	depth = arguments[2];
	depth = isNaN(depth) ? 0 : toUint(depth);

	return isCopy(a, b, depth, !isFinite(depth) && { a: [], b: [] });
};
