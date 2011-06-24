// Bind all object functions to given scope.
// If scope is not given then functions are bound to object they're assigned to.
// This emulates Python's bound instance methods.
// If source (second argument) is passed then all functions from source are
// binded to scope and assigned to object.
//
// Inspired by:
// http://mochi.github.com/mochikit/doc/html/MochiKit/Base.html#fn-bindmethods

'use strict';

var f          = require('../Function/functionalize')
  , bindBind   = require('../Function/bind-bind')
  , isFunction = require('../Function/is-function')

  , fn;

fn = bindBind(function (scope, source, key) {
	if (isFunction(source[key])) {
		this[key] = source[key].bind(scope);
	}
});

module.exports = f(function (scope, source) {
	Object.keys(source || this).forEach(fn(this, scope || this, source || this));
	return this;
});
