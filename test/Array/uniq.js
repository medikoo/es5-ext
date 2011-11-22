'use strict';

module.exports = function (t, a) {
	var x = [1, 1, 'raz', 'raz'], y;

	a.not(y = t(x), x, "Return");
	a.deep(y, [1, 'raz'], "Operation");
};
