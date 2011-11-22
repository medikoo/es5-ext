'use strict';

module.exports = function (t, a) {
	var x = [0, 1], y;

	a.not(y = t(x), x, "Returns different object");
	a.deep(y, [1], "Content");
};
