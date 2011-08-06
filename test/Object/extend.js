'use strict';

module.exports = function (t, a)  {
	t = t.call;
	var o1 = { a: function (x) { return x + 1; }, b: function () { }, d: {} }
	  , o2 = { a: function (_super, x) { return _super(this, x); }
			  , c: function () { }, d: {} }

	  , r = t(o1, o2);

	a(r.a(2), 3, "Inheritance");
	a(r.b, o1.b, "Ancestor methods");
	a.ok(!r.hasOwnProperty('b'), "Ancestor properties are not own properties");
	a(r.c, o2.c, "Descendant methods");
	a(r.d, o2.d, "Non function property override");
};
