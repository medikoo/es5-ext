'use strict';

module.exports = function (t, a) {
	t = t.call;
	var o = { 1: 1, 2: 2, 3: 3 }
	  , o2 = t(o, function (value, name) {
			return value + Number(name);
		});
	a.deep(o2, [2, 4, 6]);
};
