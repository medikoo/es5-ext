'use strict';

module.exports = function (t, a) {
	var o = { 1: 1, 2: 2, 3: 3 }
	  , o2 = t.call(o, function (value, name) {
			return value;
		});
	a.equal(JSON.stringify(o), JSON.stringify(o2));
};
