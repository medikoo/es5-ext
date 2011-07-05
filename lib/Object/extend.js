// Extend object.
// Function properties found in both objects will be extended such as child
// method will receive descendand method as first argument.
// This configuration allows super calls. More details at ../Function/inherit

'use strict';

var bindBind   = require('../Function/bind-bind')
  , f          = require('../Function/functionalize')
  , isFunction = require('../Function/is-function')
  , inherit    = require('../Function/inherit')

  , pattern, fn;

pattern = /^\s*function\s*\(\s*_super\s*[,)]/;

fn = bindBind(function (b, o, k) {
	var prop = o[k] = Object.getOwnPropertyDescriptor(b, k);
	if (prop.value && isFunction(this[k]) &&
		 isFunction(b[k]) && b[k].toString().match(pattern)) {
		prop.value = inherit(b[k], this[k]);
	}
	return o;
});

module.exports = f(function (b) {
	return Object.defineProperties(this,
		Object.getOwnPropertyNames(b).reduce(fn(this, b), {}));
});
