// Compares two objects.
// Objects are considered same when all their property names and values match.

'use strict';

var keys  = Object.keys;

module.exports = function (target) {
	var a;
	return ((a = keys(this)).length === keys(target).length) &&
		a.every(function (name) {
			return target.propertyIsEnumerable(name) && (this[name] === target[name]);
		}, this);
};
