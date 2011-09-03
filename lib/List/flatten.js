// Flattens nested array-like objects.

'use strict';

var isArray   = Array.isArray
  , f         = require('../Function/functionalize')
  , applyBind = require('../Function/apply/bind')
  , toArray   = require('./to-array').call
	, isList    = require('./is-list')
  , forEach   = require('./for-each/call')

  , push      = applyBind(Array.prototype.push);

module.exports = f(function flatten () {
	var r = [];
	if (typeof this === 'string') {
		return this;
	}
	forEach(this, function (x) {
		push(r, isArray(x) ? flatten.call(x) : [x]);
	});
	return r;
});
