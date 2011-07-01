'use strict';

module.exports = function (t, a) {
	t = t.call;
	var o1 = { a: 'raz', b: {}, c: 'trzy',  d: {}}
	  , o2 = { a: 'raz', b: {}, d: o1.d, e: 'cztery' }

	  , c = t(o1, o2);

	return {
		"Expected keys length": function (t, a) {
			a.equal(c.length, 3);
		},
		"Same primitive value": function (t, a) {
			a.ok(c.indexOf('a') === -1);
		},
		"Different object": function (t, a) {
			a.ok(c.indexOf('b') !== -1);
		},
		"Same object": function (t, a) {
			a.ok(c.indexOf('d') === -1);
		},
		"Missing in first object": function (t, a) {
			a.ok(c.indexOf('e') !== -1);
		},
		"Missing in other object": function (t, a) {
			a.ok(c.indexOf('c') !== -1);
		}
	};
};
