// Curries function 'a' with 'b'.call function
// One of the methods to implement functionality of 'super'
//
// e.g.
// b = function (f, g) { ... }
// a = inherit(function (parent, f, g) { ... parent(this, f, g) .... }, b);

'use strict';

var bindCall = require('./bind-call')
  , curry    = require('./curry');

module.exports = function (a, b) {
	return curry(a, bindCall(b));
};
