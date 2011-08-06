'use strict';

module.exports = function (t, a) {
	var o = {};
	t = t.call;
	t(o, 2, 'b');
	a(o.b, 2);
};
