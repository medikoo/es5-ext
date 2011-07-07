// Create duplicate of an object.

'use strict';

var f      = require('../../Function/functionalize')
  , merge  = require('./merge').call;

module.exports = f(function () {
	return merge({}, this);
});
