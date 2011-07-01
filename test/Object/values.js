'use strict';

module.exports = function (t, a) {
	t = t.call;
	a.equal(t({ a: 'd', b: 'e', c: 'f' }).sort().toString(),
		['d', 'e', 'f'].toString());
};
