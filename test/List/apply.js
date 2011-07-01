'use strict';

module.exports = function (t, a) {
	var o = [1,2,4];
	t = t.call;
	a.equal(t([0, 1, 2],
		function (a, b, c) { return this[a] + this[b] + this[c]; }, o),
		7);
};
