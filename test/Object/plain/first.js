'use strict';

module.exports = function (t, a) {
	var x = {}, y = {}, z = {}, r;
	t = t.call;

	a(t({}), null, "Empty");
	a(t({ foo: x }), x, "One property");
	r = t({ a: x, b: y, c: z });
	a.ok((r === x) || (r === y) || (r === z), "Many properties");
};
