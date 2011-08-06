'use strict';

module.exports = function (t, a) {
	var o1 = ['raz', 4, {}], o2;
	t = t.call;
	o2 = t(o1);

	a.not(o1, o2);
	a.deep(o1, o2);
};
