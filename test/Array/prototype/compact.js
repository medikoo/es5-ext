'use strict';

module.exports = function (t, a) {
	var x = {}, y = [0, 1, "", null, NaN, x, false, true], z;

	a.not(z = t.call(y), y, "Returns different object");
	a.deep(z, [1, x, true], "Content");
};
