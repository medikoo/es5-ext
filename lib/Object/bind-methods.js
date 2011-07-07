// Bind all object functions to given scope.
// If scope is not given then functions are bound to object they're assigned to.
// This emulates Python's bound instance methods.
// If source (second argument) is present then all functions from source are
// binded to scope and assigned to object.
//
// Inspired by:
// http://mochi.github.com/mochikit/doc/html/MochiKit/Base.html#fn-bindmethods

'use strict';

var f          = require('../Function/functionalize')
  , bindBind   = require('../Function/bind-bind')
  , isFunction = require('../Function/is-function')

  , fn;

fn = bindBind(function (source, o, key) {
	var prop;
	if (isFunction(source[key])) {
		prop = Object.getOwnPropertyDescriptor(source, key);
		if (prop.value) {
			prop.value = source[key].bind(this);
			o[key] = prop;
		}
	}
	return o;
});

module.exports = f(function (scope, source) {
	return Object.defineProperties(this,
		Object.getOwnPropertyNames(source || this)
		.reduce(fn(scope || this, source || this), {}));
});
