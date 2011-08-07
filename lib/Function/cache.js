// Cache function result

'use strict';

var f       = require('./functionalize')
  , toArray = require('../List/to-array').call
  , slice   = require('../List/slice').call;

module.exports = f(function () {
	var fn = this
	  , l = this.length
	  , cache = {}
	  , id = l ? null : '';

	return function () {
		if (l) {
			id = JSON.stringify(
				(arguments.length === l) ? toArray(arguments) : slice(arguments, 0, l));
		}
		if (cache[id]) {
			return cache[id];
		}
		return cache[id] = fn.apply(this, arguments);
	};
});
