'use strict';

module.exports = function (t, a) {
	var x = [1, 3, 5];

	a(t(x, 3), undefined, "Return");
	a.deep(x, [1, 5], "Operation");
};
