// Merge properties of one object into other.
// Property keys found in both objects will be overwritten.

'use strict';

var defineProperties         = Object.defineProperties
  , getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
  , getOwnPropertyNames      = Object.getOwnPropertyNames;

module.exports = function (b) {
	var properties = {};
	getOwnPropertyNames(b).forEach(function (key) {
		var desc;
		if (!(desc = getOwnPropertyDescriptor(this, key)) || desc.configurable) {
			properties[key] = getOwnPropertyDescriptor(b, key);
		}
	}, this);
	return defineProperties(this, properties);
};
