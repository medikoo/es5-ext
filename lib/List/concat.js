// Array.prototype.concat for array-like objects.

'use strict';

var f         = require('../Function/functionalize')
  , bindApply = require('../Function/bind-apply')
  , sameType  = require('../Object/same-type').call
  , isList    = require('./is-list')
  , map       = require('./map').call
  , toArray   = require('./to-array').call

  , concat  = bindApply(Array.prototype.concat)

  , mapArg;

mapArg = function (el) {
	if (isList(el) && sameType(this, el)) {
		return toArray(el);
	}
	return el;
};

module.exports = f(function () {
	var res = concat(toArray(this), map(arguments, mapArg, this));
	return res;
});
