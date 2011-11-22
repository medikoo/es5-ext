'use strict';

module.exports = function (t, a) {
	var o, x = {}, y = {}, z = {}, w;
	o = [1, 2, x, 3, 1, 'raz', '1', y, x, 'trzy', z, 'raz'];

	a.not(w = t.call(o), o, "Returns different object");
	a.deep(w, [1, 2, x, 3, 'raz', '1', y, 'trzy', z], "Result");
};
