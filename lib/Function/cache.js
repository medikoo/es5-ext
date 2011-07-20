// 

'use strict';

var toArray = require('../List/to-array').call
  , slice   = require('../List/slice').call;

module.exports = function (fn) {
	var l = fn.length
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
};
