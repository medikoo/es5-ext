'use strict';

module.exports = function (t, a) {
	t = t.call;
	var o = { 1: 1, 2: 2, 3: 3 }, o1 = {}
	  , o2 = t(o, function (value, name, self) {
			a(self, o, "Self");
			a(this, o1, "Scope");
			return value + Number(name);
		}, o1);
	a.deep(o2, [2, 4, 6]);
};
