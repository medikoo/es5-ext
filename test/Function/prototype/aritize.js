'use strict';

var toArray = require('../../../lib/Object/prototype/to-array');

module.exports = function (t, a) {
	a(t.call(function (a, b, c) {
		return toArray.call(arguments).toString() + '|' + String(arguments.length);
	}, 2)(1, 2, 3), '1,2|2');
};
