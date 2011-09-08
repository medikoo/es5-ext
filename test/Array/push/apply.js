'use strict';

module.exports = function (t, a) {
	var x = [1,2];
	a(t(x, [4,5,6]), 5, "Return");
	a.deep(x, [1,2,4,5,6]);
};
