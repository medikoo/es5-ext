'use strict';

module.exports = function (t, a) {
	var x = new Date(), y = new Date(x.getTime());
	y.setHours(y.getHours() - 24);
	a(t, x - y);
};
