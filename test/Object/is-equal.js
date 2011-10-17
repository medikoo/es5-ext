'use strict';

module.exports = function (t, a) {
	var o = {};
	t = t.call;
	a(t(o, {}), false, "Different objects");
	a(t(o, o), true, "Same objects");
	a(t('0', 0), true, "Equal (non strict) primitives");
	a(t(0, 0), true, "Equal primitives");
	a(t(2, 0), false, "Not equal primitives");
};
