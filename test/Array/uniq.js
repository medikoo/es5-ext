'use strict';

module.exports = function (t, a) {
	var x = [1, 1, 'raz', 'raz'];

	a(t(x), x, "Return");
	a.deep(x, [1, 'raz'], "Operation");
};
