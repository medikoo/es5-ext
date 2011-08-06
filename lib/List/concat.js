// Array.prototype.concat for array-like objects.

'use strict';

var f         = require('../Function/functionalize')
  , bindApply = require('../Function/bind-apply')
  , toArray   = require('./to-array').call

  , concat  = bindApply(Array.prototype.concat);

module.exports = f(function () {
	return concat(toArray(this), arguments);
});
