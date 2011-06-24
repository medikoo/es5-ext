// Flattens nested array-like objects.

'use strict';

var f         = require('../Function/functionalize')
  , bindApply = require('../Function/bind-apply')
	, isList    = require('./is-list')
  , forEach   = require('./for-each').call

  , push      = bindApply(Array.prototype.push);

module.exports = f(function flatten () {
	var r = [];
	forEach(this, function (x) {
		push(r, isList(x) ? flatten.call(x) : [x]);
	});
	return r;
});
