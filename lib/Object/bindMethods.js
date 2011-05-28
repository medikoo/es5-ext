// Bind all functions on object to scope.
// This emulates Python's bound instance methods.
//
// inspired by:
// http://mochi.github.com/mochikit/doc/html/MochiKit/Base.html#fn-bindmethods

'use strict';

var f          = require('../Function/functionalize')
  , bind       = require('../Function/bind')
  , isFunction = require('../Function/isFunction')

  , fn;

fn = bind(function (scope, key) {
	if (isFunction(this[key])) {
		this[key] = this[key].bind(scope);
	}
});

module.exports = f(function (scope) {
	Object.keys(this).forEach(fn(this, scope || this));
	return this;
});
