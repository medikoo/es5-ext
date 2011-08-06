'use strict';

module.exports = function (t, a) {
	t = t.call;
	var o1 = { a: 'raz', b: {}, c: 'trzy',  d: {}}
	  , o2 = { a: 'raz', b: {}, d: o1.d, e: 'cztery' }

	  , c = t(o1, o2);

	a(c.length, 3, "Expected keys length");
	a.ok(c.indexOf('a') === -1, "Same primitive value");
	a.ok(c.indexOf('b') !== -1, "Different object");
	a.ok(c.indexOf('d') === -1, "Same object");
	a.ok(c.indexOf('e') !== -1, "Missing in first object");
	a.ok(c.indexOf('c') !== -1, "Missing in other object");
};
