'use strict';

module.exports = function (t, a) {
	var o, d, x = {}, y = function () {}, z = function () {};

	o = Object.create({}, {
		foo: t(x),
		bar: t(y, z)
	});

	d = Object.getOwnPropertyDescriptor(o, 'foo')
	a(d.value,        x,     "Value");
	a(d.configurable, false, "Configurable");
	a(d.enumerable,   false, "Enumerable");
	a(d.writable,     false, "Writeable");

	d = Object.getOwnPropertyDescriptor(o, 'bar')
	a(d.get,          y,     "Getter");
	a(d.set,          z,     "Setter");
	a(d.configurable, false, "Getter/Setter configurable");
	a(d.enumerable,   false, "Getter/Setter eumerable");
};
