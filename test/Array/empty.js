'use strict';

module.exports = function (t, a) {
	var x = [1];
	a(t(x), x, "Return");
	a.deep(x, [], "Operation");
};
