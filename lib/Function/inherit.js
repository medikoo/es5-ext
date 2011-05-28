// Curries function 'a' with 'b'.call function
// One of the ways to implement functionality of 'super'
//
// e.g.
// b = function (f, g) { ... }
// a = inherit(function (parent, f, g) { ... parent(this, f, g) .... }, b);

'use strict';

var call  = require('./call')
  , curry = require('./curry');

module.exports = function (a, b) {
	return curry(a, call(b));
};
