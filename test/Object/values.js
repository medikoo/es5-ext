'use strict';

module.exports = function (t, a) {
	a.equal(t.call({ a: 'd', b: 'e', c: 'f' }).sort().toString(),
		['d', 'e', 'f'].toString());
};
