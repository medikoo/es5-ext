// Merge properties of one object into other.
// Property keys found in both objects will be overwritten.
//
// On the way we need to workaround a V8 bug

'use strict';

var f          = require('../Function/functionalize')
  , isFunction = require('../Function/is-function');

module.exports = f(function (b) {
	var desc;
	return Object.defineProperties(this,
		Object.getOwnPropertyNames(b).reduce(function (o, key) {
			if (!(desc = Object.getOwnPropertyDescriptor(this, key))
				|| desc.configurable) {
				o[key] = Object.getOwnPropertyDescriptor(b, key);
			}
			return o;
		}.bind(this), {}));
});
