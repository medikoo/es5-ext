'use strict';

module.exports = function (t, a) {
	var o = { 1: 1, 2: 2, 3: 3 }
	  , o2 = {};
	t = t.call;
	t(o, function (value, name) {
		o2[name] = value;
	});
	a(JSON.stringify(o2), JSON.stringify(o));
};
