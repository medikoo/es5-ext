// Merge properties of one object into other.
// Property keys found in both objects will be overwritten.

'use strict';

var defineProperties         = Object.defineProperties
  , getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
  , getOwnPropertyNames      = Object.getOwnPropertyNames;

module.exports = function (obj, arg) {
	var properties = {};
	getOwnPropertyNames(arg).forEach(function (key) {
		var desc;
		if (!(desc = getOwnPropertyDescriptor(obj, key)) || desc.configurable) {
			properties[key] = getOwnPropertyDescriptor(arg, key);
		}
	});
	return defineProperties(obj, properties);
};
