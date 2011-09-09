'use strict';

module.exports = function (t, a) {
	var x = {}, y = { foo: 'bar' }, o;
	o = t(x, y);

	a(o.foo, 'bar', "Property");
	a(Object.getPrototypeOf(o), x, "Prototype");
	a('foo' in x, false, "Foo on top of prototype chain");

	o = t(x);
	a(Object.getPrototypeOf(o), x, "Prototype (no properties)");
};
