'use strict';

module.exports = function (t, a)  {
	var o1 = { a: function (x) { return x + 1; }, b: function () { }, d: {} }
	  , o2 = { a: function (parent, x) { return parent(this, x); }
			  , c: function () { }, d: {} }

	  , r = t.call(o1, o2);

	return {
		"Inheritance": function (t, a) {
			a.equal(r.a(2), 3);
		},
		"Ancestor methods": function (t, a) {
			a.equal(r.b, o1.b);
		},
		"Descendant methods": function (t, a) {
			a.equal(r.c, o2.c);
		},
		"Non function property override": function (t, a) {
			a.equal(r.d, o2.d);
		}
	};
};
