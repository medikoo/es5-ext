'use strict';

var isObject = require('./is-object')
  , value    = require('./valid-value')

  , supported;

supported = (function () {
	var x = {}, y = {};
	x.__proto__ = y;
	return Object.getPrototypeOf(x) === y;
}());

if (supported) {
	module.exports = function (obj, prototype) {
		value(obj);
		if ((prototype !== null) && !isObject(prototype)) {
			throw new TypeError('Prototype must be null or an object');
		}
		obj.__proto__ = prototype;
		return obj;
	};
} else {
	module.exports = null;
}
