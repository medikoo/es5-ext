'use strict';

module.exports = function (t, a) {
	var o, x = {}, y = {}, z = {};
	o = [1, 2, x, 3, 1, 'raz', '1', y, x, 'trzy', z, 'raz'];

	t.call(o);
	a.deep(o, [1, 2, x, 3, 'raz', '1', y, 'trzy', z]);
};
