'use strict';

module.exports = function (t, a) {
	var o = { foo: 'bar', raz: 'dwa' }, r, s;

	r = t().call(o);
	s = r.toString();
	a(r.length, 2, "Multi length");
	a.ok((s === 'foo,bar,raz,dwa') || (s === 'raz,dwa,foo,bar'), "Multi content");

	t = t(true).call;
	r = t(o);
	s = r.toString();
	a(r.length, 4, "Flat length");
	a.ok((s === 'foo,bar,raz,dwa') || (s === 'raz,dwa,foo,bar'), "Flat content");
};
