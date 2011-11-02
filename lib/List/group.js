// Group list elements
// Inspired by Underscore's groupBy:
// http://documentcloud.github.com/underscore/#groupBy

'use strict';

var f       = require('../Function/functionalize')
  , forEach = require('./for-each/call');

module.exports = f(function (fn, scope) {
	var r = {};
	forEach(this, function (v) {
		var key = fn.apply(scope, arguments);
		if (!r.hasOwnProperty(key)) {
			r[key] = [];
		}
		r[key].push(v);
	});
	return r;
});
