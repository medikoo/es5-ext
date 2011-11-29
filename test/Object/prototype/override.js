'use strict';

'use strict';

module.exports = function (t, a)  {
	var o1 = { a: function (x) { return x + 1; }, b: function () { }, d: {} }
	  , o2 = { a: { value: function (_super, x) { return _super(this, x); } },
			c: { value: function () { } }, d: { value: {} } }

	  , r = t.call(o1, o2);

	a(r.a(2), 3, "Inheritance");
	a(r.b, o1.b, "Ancestor methods");
	a.ok(r.hasOwnProperty('b'), "Ancestor properties are own properties");
	a(r.c, o2.c.value, "Descendant methods");
	a(r.d, o2.d.value, "Non function property override");
};
