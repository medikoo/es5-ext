// Create duplicate of an object.
// Makes logical sense only for hashes (plain objects).

'use strict';

var f      = require('../../Function/functionalize')
  , merge  = require('./merge').call;

module.exports = f(function () {
	return merge({}, this);
});
