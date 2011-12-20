// Compares two objects.
// Objects is considered a duplicate when it's enumerable properties
// match enumerable properties of context object

'use strict';

var keys     = Object.keys
  , toObject = require('../../to-object');

module.exports = function (arg) {
	var self, a;
	self = toObject(this);
	if (arg == null) {
		return false;
	}
	arg = toObject(arg);
	return ((a = keys(self)).length === keys(arg).length) &&
		a.every(function (name) {
			return arg.propertyIsEnumerable(name) && (self[name] === arg[name]);
		}, self);
};
