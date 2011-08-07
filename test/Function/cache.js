'use strict';

module.exports = function (t, a) {
	var o = {}, i = 0,  fn = function (x) { ++i; return x*2; };
	t = t.call;

	o.raz = t(fn);

	o.raz(3); o.raz(3); o.raz(3);
	a(i, 1);

	o.raz = 1;
	a(o.raz, 1, "Writeable remains writeable");

	Object.defineProperty(o, 'dwa', {
		value: t(fn),
		configurable: false
	});

	o.dwa(5); o.dwa(5); o.dwa(5);
	a(i, 2, "Works redefined with decriptor");

	a.throws(function () {
		Object.defineProperty(o, 'dwa', { configurable: true });
	}, "Obeys descriptor");
};
