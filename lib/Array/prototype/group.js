// Group list elements
// Inspired by Underscore's groupBy:
// http://documentcloud.github.com/underscore/#groupBy

'use strict';

var forEach        = Array.prototype.forEach
  , apply          = Function.prototype.apply
  , assertCallable = require('../../Object/assert-callable')


module.exports = function (cb, thisArg) {
	var r = {};
	assertCallable(cb);
	forEach.call(this, function (v) {
		var key = apply.call(cb, thisArg, arguments);
		if (!r.hasOwnProperty(key)) {
			r[key] = [];
		}
		r[key].push(v);
	});
	return r;
};
