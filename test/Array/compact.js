'use strict';

module.exports = function (t, a) {
	var x = [0, 1];

	a(t(x), x, "Same object");
	a.deep(x, [1], "Content");
};
