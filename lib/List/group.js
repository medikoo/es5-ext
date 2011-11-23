// Group list elements
// Inspired by Underscore's groupBy:
// http://documentcloud.github.com/underscore/#groupBy

'use strict';

var forEach = Array.prototype.forEach
  , f       = require('../Function/functionalize');

module.exports = f(function (fn, scope) {
	var r = {};
	forEach.call(this, function (v) {
		var key = fn.apply(scope, arguments);
		if (!r.hasOwnProperty(key)) {
			r[key] = [];
		}
		r[key].push(v);
	});
	return r;
});
