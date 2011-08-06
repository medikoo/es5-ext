'use strict';

module.exports = function (t, a) {
	var x, y, z;
	t = t.call;
	x = { raz: 1, dwa: 2 };
	y = Object.create(x);
	y.trzy = 3;
	y.cztery = 4;
	z = t({}, y);
	a.deep(z, { raz: 1, dwa: 2, trzy: 3, cztery: 4 });
	a.ok(z.hasOwnProperty('raz'));
	a.ok(z.hasOwnProperty('trzy'));
};
