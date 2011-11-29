// Remove all object properties

'use strict';

var keys  = Object.keys
  , f     = require('../../Function/functionalize')
  , unset = require('../prototype/unset')

module.exports = f(function () {
	keys(this).forEach(unset, this);
	return this;
});
