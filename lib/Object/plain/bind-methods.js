// Bind all object functions to given scope.
// If scope is not given then functions are bound to object they're assigned to.
// This emulates Python's bound instance methods.
// If source (second argument) is present then all functions from source are
// binded to scope and assigned to object.
//
// Inspired by:
// http://mochi.github.com/mochikit/doc/html/MochiKit/Base.html#fn-bindmethods

'use strict';

var f          = require('../../Function/functionalize')
  , isFunction = require('../../Function/is-function')
  , forEach    = require('./for-each').call

module.exports = f(function (scope, source) {
	scope = scope || this;
	source = source || this;
	forEach(source, function (value, key) {
		if (isFunction(value)) {
			this[key] = value.bind(scope);
		}
	}, this);
	return this;
});
