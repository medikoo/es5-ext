// Clone list (returns Array with same items)

'use strict';

var isArray = Array.isArray
  , f       = require('../Function/functionalize')
  , toArray = require('./to-array').call
  , clone   = require('../Array/clone').call;

module.exports = f(function () {
	return isArray(this) ? clone(this) : toArray(this);
});
