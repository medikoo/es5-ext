'use strict';

module.exports = function (t, a) {
	var x = {}, y = [0, 1, "", null, NaN, x, false, true], z;

	a(t.call(y), y, "Same object");
	a.deep(y, [1, x, true], "Content");
};
