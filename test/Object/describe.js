'use strict';

module.exports = function (t, a) {
	var o = {};
	t = t.call;
	Object.defineProperty(o, 'test', t(20));
	o = Object.getOwnPropertyDescriptor(o, 'test');
	a(o.value, 20, "Value");
	a(o.enumerable, false, "Enumerable");
	a(o.writable, false, "Writable");
	a(o.configurable, false, "Configurable");
};
