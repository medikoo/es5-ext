'use strict';

module.exports = function (t, a) {
	var o = {};
	t = t.call;
	t(o, 'b', 2);
	a(o.b, 2);
};
