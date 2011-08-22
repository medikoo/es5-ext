// Remove all object properties

'use strict';

var keys = Object.keys
  , f    = require('../../Function/functionalize')

  , fn;

fn = function (name) {
	delete this[name];
};

module.exports = f(function () {
	keys(this).forEach(fn, this);
	return this;
});
