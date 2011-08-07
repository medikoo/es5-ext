'use strict';

module.exports = function (t, a) {
	var o = {}, x = {};
	t = t.call;
	Object.defineProperties(o, t({
		a: 30,
		foo: x
	}));

	a(o.a, 30, "Assign");
	a(o.foo, x, "Assign #2");

	o = Object.getOwnPropertyDescriptor(o, 'foo');
	a(o.enumerable, false, "Enumerable");
	a(o.writable, false, "Writable");
	a(o.configurable, false, "Configurable");
};
