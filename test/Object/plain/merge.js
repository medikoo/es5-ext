'use strict';

module.exports = function (t, a) {
	var o1 = { a: 1, b: 2 }
	  , o2 = { b: 3, c: 4 };

	t = t.call;
	t(o1, o2);

	a(o1.a, 1, "Keep");
	a(o1.b, 3, "Overwrite");
	a(o1.c, 4, "Add");
};
