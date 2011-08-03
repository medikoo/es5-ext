// Merge properties of one object into other.
// Property keys found in both objects will be overwritten.
//
// On the way we need to workaround a V8 bug

'use strict';

var f          = require('../Function/functionalize')
  , isFunction = require('../Function/is-function')

  , isBroken   = require('../../lib-bug/Object/defineProperty/function-prototype')

  , normal, broken, decide;

normal = function (b) {
	var desc;
	return Object.defineProperties(this,
		Object.getOwnPropertyNames(b).reduce(function (o, key) {
			if (!(desc = Object.getOwnPropertyDescriptor(this, key))
				|| desc.configurable) {
				o[key] = Object.getOwnPropertyDescriptor(b, key);
			}
			return o;
		}.bind(this), {}));
};

broken = function (b) {
	var desc;
	this.prototype = b.prototype;
	return Object.defineProperties(this,
		Object.getOwnPropertyNames(b).reduce(function (o, key) {
			if ((key !== 'prototype') && (!(desc = Object.getOwnPropertyDescriptor(this, key))
				|| desc.configurable)) {
				o[key] = Object.getOwnPropertyDescriptor(b, key);
			}
			return o;
		}.bind(this), {}));
};

decide = function (b) {
	if (isFunction(this)) {
		if (isBroken()) {
			decide = function (b) {
				if (isFunction(this)) {
					return broken.call(this, b);
				} else {
					return normal.call(this, b);
				}
			};
		} else {
			decide = normal;
		}
		return decide.call(this, b);
	} else {
		return normal.call(this, b);
	}
};

module.exports = f(function (b) {
	return decide.call(this, b);
});