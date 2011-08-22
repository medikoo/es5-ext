// Remove all object properties

'use strict';

var keys = Object.keys
  , f    = require('../../Function/functionalize')
  , del  = require('./delete')

module.exports = f(function () {
	keys(this).forEach(del, this);
	return this;
});
