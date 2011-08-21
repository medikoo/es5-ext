'use strict';

module.exports = function (t, a) {
	var x = {}, y = {}, z = {}, r;
	t = t.call;

	r = t({ foo: 'bar', x: x, raz: 'dwa', y: y  },
		{ foo: 'bar', x: y, raz: 'trzy', z: x });
	a.deep(r.o, { x: x, raz: 'dwa', y: y }, "Old");
	a.deep(r.n, { x: y, raz: 'trzy', z: x }, "New");

	r = t({ foo: 'bar', x: x, raz: 'dwa' }, {});
	a.deep(r.o, { foo: 'bar', x: x, raz: 'dwa'}, "Old");
	a.deep(r.n, {}, "New");

	r = t({}, { foo: 'bar', x: x, raz: 'dwa' });
	a.deep(r.o, {}, "Old");
	a.deep(r.n, { foo: 'bar', x: x, raz: 'dwa'}, "New");
};
