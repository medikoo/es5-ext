'use strict';

var toArray = require('../../lib/List/to-array').call;

var f = function () {
	return toArray(arguments);
};

module.exports = function (t, a) {
	t = t.call;
	a.deep(t(f, "bla", 1, 2)()(), [1,2], "Not Numeric");
	a.deep(t(f, 0, 1, 2), [1,2], "0 runs instantly");
	a.deep(t(f, -12, 1, 2), [1,2], "Negative number runs instantly");
	a.deep(t(f, 4, 1, 2)(3, 4)(5, 6)(7, 8)(9, 0), [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
		"Deep");
};
