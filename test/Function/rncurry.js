'use strict';

var toArray = require('../../lib/List/to-array').call;

var f = function () {
	return toArray(arguments);
};

module.exports = {
	"0 arguments": function (t, a) {
		a.deepEqual(t(f, 0, 1, 2)(), []);
	},
	"Many arguments": function (t, a) {
		a.deepEqual(t(f, 5, 1, 2)(3, 4)(5, 6), [5, 3, 4, 1, 2]);
	}
};
