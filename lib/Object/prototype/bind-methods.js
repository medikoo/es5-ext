// Bind all object functions to given scope.
// If scope is not given then functions are bound to object they're assigned to.
// This emulates Python's bound instance methods.
// If source (second argument) is present then all functions from source are
// binded to scope and assigned to object.
//
// Inspired by:
// http://mochi.github.com/mochikit/doc/html/MochiKit/Base.html#fn-bindmethods

'use strict';

var bind          = Function.prototype.bind
  , assertNotNull = require('../../assert-not-null')
  , isCallable    = require('../is-callable')
  , forEach       = require('./for-each')

module.exports = function (scope, source) {
	assertNotNull(this);
	scope = scope || this;
	source = source || this;
	forEach.call(source, function (value, key) {
		if (isCallable(value)) {
			this[key] = bind.call(value, scope);
		}
	}, this);
	return this;
};
