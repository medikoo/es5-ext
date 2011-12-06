'use strict';

var toArray = require('../../../lib/Object/prototype/to-array');

var f = function () {
	return toArray.call(arguments);
};

module.exports = function (t, a) {
	a.deep(t.call(f, "bla", 1, 2)()(), [1,2], "Not Numeric");
	a.deep(t.call(f, 0, 1, 2), [1,2], "0 runs instantly");
	a.deep(t.call(f, -12, 1, 2), [1,2], "Negative number runs instantly");
	a.deep(t.call(f, 4, 1, 2)(3, 4)(5, 6)(7, 8)(9, 0), [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
		"Deep");
};
