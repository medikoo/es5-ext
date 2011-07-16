'use strict';

var toArray = require('../../lib/List/to-array').call;

var f = function () {
	return toArray(arguments);
};

module.exports = {
	"0 applies now": function (t, a) {
		a.deepEqual(t(f, 0, 1, 2), [1,2]);
	},
	"Deep": function (t, a) {
		a.deepEqual(t(f, 4, 1, 2)(3, 4)(5, 6)(7, 8)(9, 0), [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
	}
};
