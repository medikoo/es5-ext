// Flattens nested array-like objects.

'use strict';

var f         = require('../Function/functionalize')
  , bindApply = require('../Function/bind-apply')
  , toArray   = require('./to-array').call
	, isList    = require('./is-list')
  , forEach   = require('./for-each').call

  , push      = bindApply(Array.prototype.push);

module.exports = f(function flatten () {
	var r = [];
	if (typeof this === 'string') {
		return this;
	}
	forEach(this, function (x) {
		push(r, (isList(x) && !(typeof x === 'string')) ? flatten.call(x) : [x]);
	});
	return r;
});
