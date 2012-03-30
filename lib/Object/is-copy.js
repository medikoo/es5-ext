// Compares two objects.
// Object is considered a copy when its own enumerable properties
// match own enumerable properties of other object

'use strict';

var keys     = Object.keys
  , toObject = require('../to-object');

module.exports = function (a, b) {
	var aKeys;
	a = toObject(a);
	if (b == null) {
		return false;
	}
	b = toObject(b);
	if (a === b) {
		return true;
	}
	return ((aKeys = keys(a)).length === keys(b).length) &&
		aKeys.every(function (name) {
			return b.propertyIsEnumerable(name) && (a[name] === b[name]);
		}, a);
};
