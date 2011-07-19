// 

'use strict';

var f       = require('../Function/functionalize')
  , toArray = require('../List/to-array').call
  , slice   = require('../List/slice').call;

module.exports = f(function (method) {
	var l = method.length
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
		return cache[id] = method.apply(this, arguments);
	};
});
