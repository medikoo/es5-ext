// Object.create alternative that provides workaround for V8 issue
// http://code.google.com/p/v8/issues/detail?id=2804
//
// When `null` is provided as a prototype, it's substituted with specially
// prepared object that derives from Object.prototype but has all
// Object.prototype properties (aside of `__proto__`) shadowed with undefined.
//
// It's quirky solution that allows us to have plain objects with no truthy
// properties (with exception of `__proto__`) but with turnable prototype.
//
// Use only for objects that you plan to switch prototypes of and be aware of
// limitations of this workaround.

'use strict';

var create = Object.create, shim;

if (!require('./set-prototype-of/is-implemented')()) {
	shim = require('./set-prototype-of/shim');
}

module.exports = (function () {
	var nullObject, props;
	if (!shim) return create;
	if (shim.level !== 1) return create;

	nullObject = {};
	props = {};
	Object.getOwnPropertyNames(Object.prototype).forEach(function (name) {
		if (name === '__proto__') return;
		props[name] = { configurable: false, enumerable: false, writable: true,
			value: undefined };
	});
	Object.defineProperties(nullObject, props);

	Object.defineProperty(shim, 'nullPolyfill', { configurable: false,
		enumerable: false, writable: false, value: nullObject });

	return function (prototype, props) {
		return create((prototype === null) ? nullObject : prototype, props);
	};
}());
