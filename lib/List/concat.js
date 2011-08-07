// Array.prototype.concat for array-like objects.

'use strict';

var f         = require('../Function/functionalize')
  , applyBind = require('../Function/apply-bind')
  , toArray   = require('./to-array').call

  , concat  = applyBind(Array.prototype.concat);

module.exports = f(function () {
	return concat(toArray(this), arguments);
});
