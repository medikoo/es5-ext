// Extends object and allows super calls in child methods.
// If function property is found in both objects, and child function arguments
// list starts with '_super' argument, then it will be extended such as child
// method will receive descendand.call method as first argument.

'use strict';

var bindBind   = require('../Function/bind-bind')
  , callBind   = require('../Function/call-bind')
  , curry      = require('../Function/curry').call
  , f          = require('../Function/functionalize')
  , isFunction = require('../Function/is-function')

  , pattern, fn;

pattern = /^\s*function\s*\(\s*_super\s*[,)]/;

fn = bindBind(function (b, o, k) {
	var prop = o[k] = Object.getOwnPropertyDescriptor(b, k);
	if (prop.value && isFunction(this[k]) &&
		 isFunction(b[k]) && b[k].toString().match(pattern)) {
		prop.value = curry(b[k], callBind(this[k]));
	}
	return o;
});

module.exports = f(function (b) {
	return Object.create(this,
		Object.getOwnPropertyNames(b).reduce(fn(this, b), {}));
});
