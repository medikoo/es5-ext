'use strict';

var toArray = require('../../lib/List/to-array').call;

module.exports = function (t, a) {
	t = t.call;
	a(t(function (a, b, c) {
		return toArray(arguments).toString() + '|' + String(arguments.length);
	}, 2)(1, 2, 3), '1,2|2');
};
