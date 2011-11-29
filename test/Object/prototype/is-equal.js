'use strict';

module.exports = function (t, a) {
	var o = {};
	a(t.call(o, {}), false, "Different objects");
	a(t.call(o, o), true, "Same objects");
	a(t.call('0', 0), true, "Equal (non strict) primitives");
	a(t.call(0, 0), true, "Equal primitives");
	a(t.call(2, 0), false, "Not equal primitives");
};
