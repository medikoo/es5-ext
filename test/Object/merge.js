'use strict';

module.exports = function (t, a) {
	var o1 = { a: 1, b: 2 }
	  , o2 = { b: 3, c: 4 };

	t.call(o1, o2);

	return {
		"Keep": function (t, a) {
			a.equal(o1.a, 1);
		},
		"Overwrite": function (t, a) {
			a.equal(o1.b, 3);
		},
		"Add": function (t, a) {
			a.equal(o1.c, 4);
		}
	};
};
