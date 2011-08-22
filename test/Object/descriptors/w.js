'use strict';

module.exports = function (t, a) {
	var o, d, x = {};

	o = Object.create({}, {
		foo: t(x)
	});

	d = Object.getOwnPropertyDescriptor(o, 'foo')
	a(d.value,        x,     "Value");
	a(d.configurable, false,  "Configurable");
	a(d.enumerable,   false, "Enumerable");
	a(d.writable,     true, "Writeable");
};
