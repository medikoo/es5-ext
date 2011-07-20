'use strict';

module.exports = function (t, a) {
	var o = new Date(), o2;
	t = t.call;

	o2 = t(o);
	a.not(o, o2, "Different objects");
	a.ok(o2 instanceof Date, "Instance of Date");
	a(o.getTime(), o2.getTime(), "Same time");
};
