'use strict';

module.exports = function (t, a) {
	var o, r, fn;

	o = { raz: 1, dwa: 2, trzy: 3, cztery: 4, pięć: 5 };

	a.deep(t.call(o), o, "No arguments");
	a.deep(t.call(o, 'test'), o, "Bad 1st argument, no second");
	a.deep(t.call(o, 'test', 'test'), {}, "Bad both arguments");

	a(Object.keys(t.call(o, 1)).length, 4, "Sliced output, start provided, no order");
	a(Object.keys(t.call(o, 1, 3)).length, 2,
		"Sliced output, start & end provided, no order");
	a(Object.keys(t.call(o, -1)).length, 1, "Sliced output, negative start, no order");
	a(Object.keys(t.call(o, -1, 10)).length, 1,
		"Sliced output, negative start, positive end, no order");
	a(Object.keys(t.call(o, -3, -1)).length, 2,
		"Sliced output, negative start, negative end, no order");

	a(Object.keys(t.call(o, 1)).length, 4, "Sliced output, start provided, no order");
	a(Object.keys(t.call(o, 1, 3)).length, 2,
		"Sliced output, start & end provided, no order");
	a(Object.keys(t.call(o, -1)).length, 1, "Sliced output, negative start, no order");
	a(Object.keys(t.call(o, -1, 10)).length, 1,
		"Sliced output, negative start, positive end, no order");
	a(Object.keys(t.call(o, -3, -1)).length, 2,
		"Sliced output, negative start, negative end, no order");

	fn = function (a, b) { return a - b; };

	a.deep(t.call(o, 1, null, fn), { dwa: 2, trzy: 3, cztery: 4, pięć: 5 },
		"Sliced output, start provided, ordered by values");
	a.deep(t.call(o, 1, 3, fn), { dwa: 2, trzy: 3 },
		"Sliced output, start & end provided, ordered by values");
	a.deep(t.call(o, -2, null, fn), { cztery: 4, pięć: 5 },
		"Sliced output, negative start, ordered by values");
	a.deep(t.call(o, -1, 10, fn), { pięć: 5 },
		"Sliced output, negative start, positive end, ordered by values");
	a.deep(t.call(o, -3, -1, fn), { trzy: 3, cztery: 4},
		"Sliced output, negative start, negative end, ordered by values");

	fn = function (a, b) { return a.localeCompare(b); };

	a.deep(t.call(o, 1, null, fn, true), { dwa: 2, trzy: 3, raz: 1, pięć: 5 },
		"Sliced output, start provided, ordered by keys");
	a.deep(t.call(o, 1, 3, fn, true), { dwa: 2, pięć: 5 },
		"Sliced output, start & end provided, ordered by keys");
	a.deep(t.call(o, -2, null, fn, true), { raz: 1, trzy: 3 },
		"Sliced output, negative start, ordered by keys");
	a.deep(t.call(o, -1, 10, fn, true), { trzy: 3 },
		"Sliced output, negative start, positive end, ordered by keys");
	a.deep(t.call(o, -3, -1, fn, true), { pięć: 5, raz: 1 },
		"Sliced output, negative start, negative end, ordered by keys");

};
