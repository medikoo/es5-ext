'use strict';

module.exports = function (t, a) {
	var o, x = {}, y = {}, z = {};
	t = t.call;

	o = [1, 2, x, 3, 1, 'raz', '1', y, x, 'trzy', z, 'raz'];

	t(o);
	a.deep(o, [1, 2, x, 3, 'raz', '1', y, 'trzy', z]);
};
